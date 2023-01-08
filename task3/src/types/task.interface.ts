export interface ITask{
    title: string,
    status: progress,
    id: number;
};

export interface IPopups{
    editTask: boolean,
}

type progress = 'COMPLETED' | 'PERFORMED';