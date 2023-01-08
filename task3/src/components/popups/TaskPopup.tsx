import { Input, Button } from 'antd';
import { Content } from 'antd/es/layout/layout';
import {SaveOutlined} from '@ant-design/icons';
import {ChangeEvent, FC, useState, Dispatch, SetStateAction, MouseEvent} from 'react';
import { IPopups, ITask } from '../../types/task.interface';
import styles from './TaskPopup.module.scss';


interface IProps{
    task: ITask,
    actionTasks: Dispatch<SetStateAction<ITask[]>>,
    stateTasks: ITask[],
    actionPopup: Dispatch<SetStateAction<IPopups>>,
}

export const TaskPopup: FC<IProps> = (props: IProps) => {

    const [value, setValue] = useState<string>(props.task.title)

    const onSaveButtonClick = () => {
        const buffer = props.stateTasks.filter(item => item.id !== props.task.id);
        props.actionTasks([...buffer, {title: value, id: props.task.id, status: props.task.status}]);
        props.actionPopup(prev => ({...prev, editTask: false}));
    }

    const onDivClick = (event: MouseEvent) => {
        event.stopPropagation()
    }

    const onWrapperClick = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        props.actionPopup(prev => ({...prev, editTask: false}));
    }

    return (
        <Content onClick={(event: MouseEvent<HTMLDivElement>) => onWrapperClick(event)} className={styles.popup}>
            <div onClick={(event: MouseEvent<HTMLDivElement>) => onDivClick(event)} className={styles.content}>
                <Input 
                    value={value}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
                />
                <Button onClick={() => onSaveButtonClick()} icon={<SaveOutlined />} className={styles.button} type="primary">Save</Button>
            </div>
        </Content>
    )
}