import {useState} from "react";
import styles from './RecursiveApp.module.css';


const comments: Comment[] = [
    {
        id: 1,
        text: "message 1",
    },
    {
        id: 2,
        text: "message 2",
        children: [
            {
                id: 4,
                text: "message 4",
                children: [
                    {
                        id: 7,
                        text: "message 7",
                    },
                    {
                        id: 8,
                        text: "message 8",
                        children: [
                            {
                                id: 9,
                                text: "message 9",
                            },
                            {
                                id: 10,
                                text: "message 10",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        text: "message 5",
    },
];

const mockFetchChildren = (children: Comment[]): Promise<Comment[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(children), 500);
    });
};


type Comment = {
    id: number;
    text: string;
    children?: Array<Comment>;
}


type CommentProps = {
    comment: Comment;
};

// Comment
const Comment = ({comment}: CommentProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [children, setChildren] = useState<Comment[] | null>(null);
    const [loading, setLoading] = useState(false);

    /*const toggleOpenAsync = () => {

        // We are loading
        if (loading) return;

        // No children at all
        if (!comment.children?.length) return;

        // Only handle the first open case with lazy children
        if (!isOpen && !children ) {
            setLoading(true);
            setIsOpen(true);

            mockFetchChildren(comment.children)
                .then((result) => {
                    setChildren(result);
                })
                .finally(() => {
                    setLoading(false);
                });

            return;
        }

        // Default toggle behavior for already-loaded or collapsed state
        setIsOpen((prev) => !prev);
    };*/

    const toggleOpenAsync = async () => {
        // We are loading
        if (loading) return;

        // No children at all
        if (!comment.children?.length) return;

        // Only handle the first open case with lazy children
        if (!isOpen && !children) {
            setLoading(true);
            setIsOpen(true); // Show loader immediately

            try {
                const result = await mockFetchChildren(comment.children);
                setChildren(result); // Render children once ready
            } finally {
                setLoading(false); // Hide loader regardless of success/failure
            }

            return;
        }

        // Default toggle behavior for already-loaded or collapsed state
        setIsOpen((prev) => !prev);
    };



    return (
        <li className={styles.commentItem}>
            <p className={styles.commentText} onClick={toggleOpenAsync}>
                {comment.text} {comment.children ? isOpen ? "-" : "+" : ""}
            </p>
            {isOpen && (
                <>
                    {loading && <p>Loading...</p>}
                    {children && <Comments comments={children}/>}
                </>)
            }
        </li>
    );
};

type CommentsProps = {
    comments: Array<Comment>;
};

// Comments
const Comments = ({comments}: CommentsProps) => {
    return (
        <ul className={styles.commentsList} style={{paddingLeft: "20px", borderLeft: "1px solid #ccc"}}>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment}/>
            ))}
        </ul>
    );
};

const RecursiveApp = () => {
    return (
        <div className="App">
            <Comments comments={comments}/>
        </div>
    );
};

export default RecursiveApp;
