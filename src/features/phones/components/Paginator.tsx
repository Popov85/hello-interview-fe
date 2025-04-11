import {Dispatch, FC, ReactNode, SetStateAction} from "react";
import styles from "./Paginator.module.css";

type PaginationProps = {
    page: number;
    totalPages?: number;
    setPage: Dispatch<SetStateAction<number>>;
    children: () => ReactNode;
};

export const Paginator: FC<PaginationProps> = ({page, totalPages = 1, setPage, children,}) => {
    return (
        <div>
            {children()}
            <div className={styles.pgBlock}>
                <button disabled={page === 0} onClick={() => setPage(page =>page - 1)}>
                    Previous
                </button>
                <span className={styles.pgPageNumber}>Page {page + 1} of {totalPages}</span>
                <button disabled={page >= totalPages - 1} onClick={() => setPage(page => page + 1)}>
                    Next
                </button>
            </div>
        </div>
    );
};
