import React, { useState, useRef, useEffect } from 'react'

import styles from './AddComponent.module.css'

function AddComponent({ addTask }) {

  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const dateInputRef = useRef(null);

  useEffect(() => {
    const input = dateInputRef.current;
    if (!input.value) {
      input.placeholder = 'mm/dd/yy';
    }
    const handleFocus = () => input.placeholder = '';
    const handleBlur = () => {
      if (!input.value) {
        input.placeholder = 'mm/dd/yy';
      }
    };
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);

    return () => {
      input.removeEventListener('focus', handleFocus);
      input.removeEventListener('blur', handleBlur);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text, dueDate);
      setText('');
      setDueDate('');
      dateInputRef.current.placeholder = 'mm/dd/yy';
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.addContainer}>
          <h1>TODO APP</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputBox}>
              <input type="text" placeholder="Add Todo" value={text} onChange={(e) => setText(e.target.value)} />
              <input type="date"  ref={dateInputRef} placeholder="mm/dd/yy" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
              <button className={styles.addtask} type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddComponent