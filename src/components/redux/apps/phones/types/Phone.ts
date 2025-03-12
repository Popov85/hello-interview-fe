export type Phone = {
    id: number | null;
    brand: string;
    model: string;
    description: string;
    specification: Map<string, never>;
}

export type PhonesResponse = {
    content: Phone[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
}