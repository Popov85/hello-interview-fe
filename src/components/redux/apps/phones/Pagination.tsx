import { FC } from "react";
import styles from "./Pagination.module.css";

type Props = {
    page: number;
    totalPages?: number;
    setPage: (newPageNumber: number) => void;
};

export const Pagination: FC<Props> = ({ page, totalPages = 1, setPage }: Props) => {
    return (
        <div className={styles.pgBlock}>
            <button disabled={page === 0} onClick={() => setPage(page - 1)}>
                Previous
            </button>
            <span className={styles.pgPageNumber}>Page {page + 1} of {totalPages}</span>
            <button disabled={page >= totalPages - 1} onClick={() => setPage(page + 1)}>
                Next
            </button>
        </div>
    );
};
