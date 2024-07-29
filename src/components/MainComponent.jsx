import React, { useEffect, useState } from 'react';
import styles from './MainComponent.module.css';
import AddComponent from './AddComponent';
import ListComponent from './ListComponent';

function MainComponent() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (text, dueDate) => {
        const newTask = {
            id: Date.now(),
            text,
            dueDate: dueDate ? new Date(dueDate).toISOString() : null,
            createdDate: new Date().toISOString(),
            isCompleted: false,
        };
        setTasks([...tasks, newTask]);
    };

    const completeTask = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
        ));
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const editTask = (taskId, newText) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, text: newText } : task
        ));
    };

    return (
        <div className={styles.container}>
            <AddComponent addTask={addTask} />
            <ListComponent
                tasks={tasks}
                completeTask={completeTask}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        </div>
    );
}

export default MainComponent;
