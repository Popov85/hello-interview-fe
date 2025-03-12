import { FC } from "react";
import styles from "./Pagination.module.css";

type Props = {
    page: number;
    totalPages?: number;
    onPageChange: (newPage: number) => void;
};

export const Pagination: FC<Props> = ({ page, totalPages = 1, onPageChange }: Props) => {
    return (
        <div className={styles.pgBlock}>
            <button disabled={page === 0} onClick={() => onPageChange(page - 1)}>
                Previous
            </button>
            <span className={styles.pgPageNumber}>Page {page + 1} of {totalPages}</span>
            <button disabled={page >= totalPages - 1} onClick={() => onPageChange(page + 1)}>
                Next
            </button>
        </div>
    );
};
