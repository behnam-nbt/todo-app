import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

import styles from './ListComponent.module.css';

import Trash from '/images/trash-bin.png';
import Edit from '/images/pencil.png';
import Save from '/images/diskette.png';

function TaskItem({ task, completeTask, deleteTask, editTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    useEffect(() => {
        setNewText(task.text);
    }, [task]);

    const handleEdit = (e) => {
        if (isEditing) {
            editTask(task.id, newText);
        }
        setIsEditing(!isEditing);
    };

    return (
        <tr>
            <td>
                <label className={styles.checkbox}>
                    <input
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={() => completeTask(task.id)}
                    />
                    <span className={styles.checkmark}></span>
                </label>
            </td>
            <td>
                {isEditing ? (
                    <div className={styles.editSection}>
                        <input
                            type="text"
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                        />
                        <button style={{ marginTop: "2rem", padding: "0.5rem 4rem" }} onClick={handleEdit}>{isEditing && <img src={Save} alt='edit' />}</button>

                    </div>
                ) : (
                    <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                        {task.text}
                    </span>
                )}
            </td>
            <td>{format(new Date(task.createdDate), 'MM/dd/yyyy')}</td>
            <td>
                {task.dueDate ? format(new Date(task.dueDate), 'MM/dd/yyyy') : 'No due date'}
            </td>
            <td>
                <button className={styles.edit} onClick={handleEdit}>{isEditing ? <img src={Save} alt='edit' /> : <img src={Edit} alt='edit' />}</button>
                <button className={styles.edit} onClick={() => deleteTask(task.id)}>
                    <img src={Trash} alt="delete" />
                </button>
            </td>
        </tr>
    );
}

export default TaskItem;
