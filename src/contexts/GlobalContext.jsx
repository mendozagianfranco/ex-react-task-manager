import { createContext, useContext, useEffect, useState } from 'react';

const TaskContext = createContext();

function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL_API}/tasks`)
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    return (
        <TaskContext.Provider value={{ tasks }}>
            {children}
        </TaskContext.Provider>
    );
}

function useTask() {
    const context = useContext(TaskContext);
    return context;
}

export { TaskProvider, useTask };