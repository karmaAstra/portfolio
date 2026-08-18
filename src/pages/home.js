import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Explore the new React setup', completed: true },
    { id: 2, text: 'Customize the About and Contact pages', completed: false },
    { id: 3, text: 'Deploy the project online', completed: false },
  ]);
  const [inputTask, setInputTask] = useState('');
  
  // State for the QR code generator tool
  const [qrText, setQrText] = useState('https://example.com');

  // Add a new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!inputTask.trim()) return;
    
    const newTask = {
      id: Date.now(),
      text: inputTask,
      completed: false,
    };
    
    setTasks([...tasks, newTask]);
    setInputTask('');
  };

  // Toggle completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.badge}>Welcome Home</div>
        <h1 style={styles.title}>Manage Your Day & Share Links</h1>
        <p style={styles.subtitle}>
          Stay organized with your to-do list and quickly generate QR codes on the fly.
        </p>
      </div>

      <div style={styles.gridContainer}>
        {/* To-Do List Container */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>📝 Today's Tasks</h2>

          {/* Input Form */}
          <form onSubmit={handleAddTask} style={styles.form}>
            <input
              type="text"
              placeholder="Add a new task..."
              value={inputTask}
              onChange={(e) => setInputTask(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.addButton}>Add Task</button>
          </form>

          {/* Task List */}
          <ul style={styles.list}>
            {tasks.length === 0 ? (
              <p style={styles.emptyText}>No tasks left! Enjoy your day 🎉</p>
            ) : (
              tasks.map((task) => (
                <li key={task.id} style={styles.listItem}>
                  <span
                    onClick={() => toggleTask(task.id)}
                    style={{
                      ...styles.taskText,
                      textDecoration: task.completed ? 'line-through' : 'none',
                      color: task.completed ? '#9ca3af' : '#1f2937',
                    }}
                  >
                    {task.completed ? '✅ ' : '⬜ '} {task.text}
                  </span>
                  <button 
                    onClick={() => deleteTask(task.id)} 
                    style={styles.deleteButton}
                  >
                    Delete
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* QR Code Generator Card */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>📱 QR Code Generator</h2>
          <p style={styles.qrDesc}>Type a website link or text below to instantly generate a scannable QR code:</p>
          
          <div style={styles.form}>
            <input
              type="text"
              placeholder="Enter URL or text..."
              value={qrText}
              onChange={(e) => setQrText(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.qrDisplayBox}>
            <QRCodeSVG 
              value={qrText || 'https://example.com'} 
              size={180} 
              bgColor={"#ffffff"}
              fgColor={"#111827"}
              level={"H"}
              includeMargin={true}
            />
            <p style={styles.qrValueText}>Scans to: <b>{qrText || 'Empty'}</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Inline Styles for a polished look
const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
    paddingBottom: '60px',
  },
  hero: {
    textAlign: 'center',
    padding: '50px 20px 30px 20px',
    maxWidth: '700px',
    margin: '0 auto',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#e0e7ff',
    color: '#4f46e5',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  title: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#111827',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#4b5563',
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 20px',
    flexWrap: 'wrap',
  },
  card: {
    flex: '1',
    minWidth: '300px',
    maxWidth: '500px',
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e5e7eb',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '15px',
  },
  qrDesc: {
    fontSize: '14px',
    color: '#4b5563',
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: '1',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '15px',
    outline: 'none',
  },
  addButton: {
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    border: 'none',
    padding: '0 20px',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 15px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
  },
  taskText: {
    cursor: 'pointer',
    fontSize: '15px',
    flex: '1',
    wordBreak: 'break-word',
  },
  deleteButton: {
    backgroundColor: '#fee2e2',
    color: '#dc2626',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  emptyText: {
    textAlign: 'center',
    color: '#6b7280',
    padding: '20px 0',
  },
  qrDisplayBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
  },
  qrValueText: {
    marginTop: '15px',
    fontSize: '13px',
    color: '#4b5563',
    wordBreak: 'break-all',
    textAlign: 'center',
  },
};

export default Home;