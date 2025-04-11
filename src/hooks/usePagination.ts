// usePagination.ts
import { useState } from "react";

/**
 * Custom hook for handling client-side pagination logic.
 *
 * @param totalItems - Total number of items to paginate.
 * @param itemsPerPage - Number of items per page (default is 10).
 * @returns Pagination state and control functions.
 */
export const usePagination = (
    totalItems: number,
    itemsPerPage: number = 10
): {
    page: number;
    totalPages: number;
    next: () => void;
    prev: () => void;
    setPage: (page: number) => void;
} => {
    const [page, setPage] = useState<number>(0);
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

    const next = (): void => {
        setPage((p) => Math.min(p + 1, totalPages - 1));
    };

    const prev = (): void => {
        setPage((p) => Math.max(p - 1, 0));
    };

    return { page, totalPages, next, prev, setPage };
};
