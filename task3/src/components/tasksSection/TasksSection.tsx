import { ChangeEvent, FC, useState, useEffect } from "react";
import { Layout, Input, List, Checkbox, Typography } from "antd";
import { TaskPopup } from "../popups/TaskPopup";
import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { IPopups, ITask } from "../../types/task.interface";

import styles from "./Sectiom.module.scss";

const { Content } = Layout;

export const TasksSection: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [completed, setCompleted] = useState<ITask[]>([]);
  const [popups, setPopups] = useState<IPopups>({editTask: false});
  const [activeTask, setActiveTask] = useState<ITask | null>(null);

  const addTask = (task: ITask): void => {
    if (task.title) {
      setTasks(prev => [...prev, task]);
      setTitle("");
    }
  };

  const toggleStatus = (activeTask: ITask): void => {
    activeTask.status =
      activeTask.status === "PERFORMED" ? "COMPLETED" : "PERFORMED";
    if (activeTask.status === "COMPLETED") {
      setCompleted((prevState) => [...prevState, activeTask]);
      setTasks((prevState) =>
        prevState.filter((task) => task.id !== activeTask.id)
      );
    } else {
      setTasks((prevState) => [...prevState, activeTask]);
      setCompleted((prevState) =>
        prevState.filter((task) => task.id !== activeTask.id)
      );
    };

    console.log(tasks, completed);
  };

  const togglePopup = (key: keyof IPopups) => {
    setPopups(prev => ({...prev, [key]: !prev[key]}));
  }

  const deleteTask = (activeTask: ITask) => {
    setTasks((prev) => [...prev.filter((task) => task.id !== activeTask.id)]);
    setCompleted((prev) => [
      ...prev.filter((task) => task.id !== activeTask.id),
    ]);
  };

  return (
    <Content className={styles.section}>
      <p className={styles.nameCollection}>Main tasks</p>
      <Input
        value={title}
        onChange={(event: ChangeEvent<HTMLInputElement>): void =>
          setTitle(event.target.value)
        }
        className={styles.input}
        size="large"
        placeholder="Input the name of your task"
        prefix={
          <PlusCircleOutlined
            onClick={() =>
              addTask({
                title: title,
                status: "PERFORMED",
                id: tasks.length+completed.length + 1,
              })
            }
          />
        }
      />

      <Typography className={styles.sectionProgress}>
        Performed - {tasks.length}
      </Typography>
      <List
        itemLayout="horizontal"
        dataSource={tasks}
        renderItem={(item: ITask) =>
          item.status === "PERFORMED" && (
            <List.Item className={styles.listItem}>
              <div className={styles.taskItem}>
                <Checkbox
                  className={styles.checkbox}
                  checked={false}
                  defaultChecked={false}
                  onChange={() => toggleStatus(item)}
                />
                <Typography onClick={() => {togglePopup("editTask"); setActiveTask(item)}} className={styles.taskTitle}>
                  {item.title}
                </Typography>
              </div>
            </List.Item>
          )
        }
      />
      <Typography className={styles.sectionProgress}>
        Completed - {completed.length}
      </Typography>
      <List
        itemLayout="horizontal"
        dataSource={completed}
        renderItem={(item: ITask) =>
          item.status === "COMPLETED" && (
            <List.Item className={styles.listItem}>
              <div className={styles.taskItem}>
                <Checkbox
                  className={styles.checkbox}
                  checked={true}
                  defaultChecked={true}
                  onChange={() => toggleStatus(item)}
                />
                <Typography onClick={() => {togglePopup("editTask"); setActiveTask(item)}} className={styles.taskTitle}>
                  {item.title}
                </Typography>
                <DeleteOutlined
                  onClick={() => deleteTask(item)}
                  className={styles.DeleteOutlined}
                />
              </div>
            </List.Item>
          )
        }
      />
     {(activeTask && popups.editTask) && <TaskPopup actionPopup={setPopups} actionTasks={activeTask.status === 'COMPLETED' ? setCompleted : setTasks} stateTasks={tasks} task={activeTask}/>}
    </Content>
  );
};
