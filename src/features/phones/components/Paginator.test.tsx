import {cleanup, fireEvent, render, screen} from "@testing-library/react";
import { afterEach, describe, it, expect, vi} from "vitest";
import { Paginator } from "./Paginator";

afterEach(() => {
    cleanup();
});

describe("Paginator component", () => {
    it("Renders children", () => {
        render(
            <Paginator page={0} totalPages={5} setPage={() => {}}>
                {() => <div>Test Content</div>}
            </Paginator>
        );

        expect(screen.getByText("Test Content")).not.toBeNull();
    });

    it("Shows correct page number", () => {
        render(
            <Paginator page={2} totalPages={5} setPage={() => {}}>
                {() => <div />}
            </Paginator>
        );

        const pageText = screen.queryByText("Page 3 of 5");
        expect(pageText).not.toBeNull();
    });

    it("Calls setPage with functional update on Next", () => {
        const setPage = vi.fn();
        render(
            <Paginator page={1} totalPages={5} setPage={setPage}>
                {() => <div />}
            </Paginator>
        );

        fireEvent.click(screen.getByText("Next"));
        expect(setPage).toHaveBeenCalledOnce();
        expect(setPage).toHaveBeenCalledWith(expect.any(Function));
    });

    it("Disables Previous when on first page", () => {
        render(
            <Paginator page={0} totalPages={5} setPage={() => {}}>
                {() => <div />}
            </Paginator>
        );

        const prevButton = screen.getByText("Previous") as HTMLButtonElement;
        expect(prevButton.disabled).toBe(true);
    });

    it("Disables Next when on last page", () => {
        render(
            <Paginator page={4} totalPages={5} setPage={() => {}}>
                {() => <div />}
            </Paginator>
        );

        const nextButton = screen.getByText("Next") as HTMLButtonElement;
        expect(nextButton.disabled).toBe(true);
    });
});