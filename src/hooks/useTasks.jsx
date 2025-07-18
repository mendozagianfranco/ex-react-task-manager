import { useEffect, useState } from 'react';

export default function useTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL_API}/tasks`)
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    const addTask = () => { };
    const removeTask = () => { };
    const updateTask = () => { };

    return { tasks, addTask, removeTask, updateTask };
}