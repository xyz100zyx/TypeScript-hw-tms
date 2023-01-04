import {ChangeEvent, FC, useState, useEffect} from "react";
import {Layout, Input, List, Checkbox, Typography} from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';

import styles from './Sectiom.module.scss';
import {ITask} from "../../types/task.interface";

const {Content} = Layout;

export const TasksSection: FC = () => {

    const [title, setTitle] = useState<string>('');
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [completed, setCompleted] = useState<ITask[]>([]);

    const addTask = (task: ITask): void => {
        if (task.title) {
            const prevtasks = tasks;
            prevtasks.push(task);
            setTasks(prevtasks);
            setTitle('')
        }
    }

    const toggleStatus = (activeTask: ITask): void => {
        activeTask.status = activeTask.status === 'PERFORMED' ? 'COMPLETED' : 'PERFORMED';
        if(activeTask.status === 'COMPLETED'){
            setCompleted(prevState => ([...prevState, activeTask]));
            setTasks(prevState => prevState.filter(task => task.id !== activeTask.id))
        }else{
            setTasks(prevState => [...prevState, activeTask]);
            setCompleted(prevState => prevState.filter(task => task.id !== activeTask.id))
        }

    }



    return (
        <Content className={styles.section}>
            <p className={styles.nameCollection}>Main tasks</p>
            <Input value={title} onChange={(event: ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value)}
                   className={styles.input} size="large" placeholder="large size"
                   prefix={<PlusCircleOutlined
                       onClick={() => addTask({title: title, status: 'PERFORMED', id: tasks.length + 1})}/>}/>

            <Typography>Tasks - {tasks.length}</Typography>
            <List
                itemLayout="horizontal"
                dataSource={tasks}
                renderItem={(item: ITask) =>
                    (
                        item.status === 'PERFORMED' && <List.Item className={styles.listItem}>
                            <Checkbox checked={false} defaultChecked={false} onChange={() => toggleStatus(item)}/>
                            <Typography>{item.title}</Typography>
                        </List.Item>
                    )
                }
            />
            <Typography>Completed - {completed.length}</Typography>
            <List
                itemLayout="horizontal"
                dataSource={completed}
                renderItem={(item: ITask) =>
                    (
                        item.status === 'COMPLETED' && <List.Item className={styles.listItem}>
                            <Checkbox checked={true} defaultChecked={true} onChange={() => toggleStatus(item)}/>
                            <Typography>{item.title}</Typography>
                        </List.Item>
                    )
                }
            />
        </Content>
    )
}