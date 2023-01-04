export interface ITask{
    title: string,
    status: progress,
    id: number;
};

type progress = 'COMPLETED' | 'PERFORMED';