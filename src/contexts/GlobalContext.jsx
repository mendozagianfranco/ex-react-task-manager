import { createContext, useContext, useEffect, useState } from 'react';
import useTasks from '../hooks/useTasks';

const TaskContext = createContext();


function TaskProvider({ children }) {
    const taskData = useTasks();
    return (
        <TaskContext.Provider value={{ ...taskData }}>
            {children}
        </TaskContext.Provider>
    );
}

function useContextTasks() {
    const context = useContext(TaskContext);
    return context;
}

export { TaskProvider, useContextTasks };