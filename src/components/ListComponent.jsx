import React from 'react';
import TaskItem from './TaskItem';
import styles from './ListComponent.module.css';

function ListComponent({ tasks, completeTask, deleteTask, editTask, editDueDate }) {
  return (
    <>
      {tasks.length === 0 ? (
        <p className={styles.text}>You do not have any tasks yet.</p>
      ) : (
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Task</th>
                <th>Created Date</th>
                <th>Due Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <TaskItem
                  key={task.id}
                  task={task}
                  completeTask={completeTask}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default ListComponent;
