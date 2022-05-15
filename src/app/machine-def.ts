export enum Status{
    running,
    warning,
    error,
}
export interface Machine {
    name: string;
    status: string;
    icon: string;
}