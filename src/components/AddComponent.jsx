import React, { useState } from 'react'

import styles from './AddComponent.module.css'

function AddComponent({ addTask }) {

  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text, dueDate);
      setText('');
      setDueDate('');
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.addContainer}>
          <h1>TODO APP</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputBox}>
              <input type="text" placeholder="Add Todo" value={text} onChange={(e) => setText(e.target.value)} />
              <input type="date" placeholder="mm/dd/yy" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
              <button className={styles.addtask} type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddComponent