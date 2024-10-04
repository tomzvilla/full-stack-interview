export interface ITodo {
    id: string;
    title: string;
    description: string;
    estimated_time: number;
    done: boolean | null
}

export interface ITodoBD {
    title: string;
    description: string;
    estimated_time: number;
}