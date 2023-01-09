import { ITask } from "../types/task.interface"

export const getTaskCount = (tasks: ITask[]): {performed: number, completed: number}  => {

    let performed = 0;
    let completed = 0;

    tasks.forEach(task => {
        if(task.status === 'COMPLETED'){
            completed++;
        }else{
            performed++;
        }
    });

    return {
        performed,
        completed
    }
}