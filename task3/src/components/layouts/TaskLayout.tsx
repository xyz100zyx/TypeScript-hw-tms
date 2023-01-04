import {FC} from "react";
import { Layout } from 'antd';
import {TasksSection} from "../tasksSection/TasksSection";

import styles from './Layout.module.scss';

export const TaskLayout: FC = () => {
    return (
        <Layout className={styles.layout}>
            <TasksSection />
        </Layout>
    )
}