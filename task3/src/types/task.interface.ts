export interface ITask{
    title: string,
    status: progress,
    id: string;
};

export interface IPopups{
    editTask: boolean,
}

type progress = 'COMPLETED' | 'PERFORMED';