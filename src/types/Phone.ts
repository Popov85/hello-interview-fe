import {Page} from "./Page.ts";

export type Phone = {
    id: number | null;
    brand: string;
    model: string;
    description: string;
    specification: Map<string, never>;
}

export type PhonesResponse = Page<Phone>;