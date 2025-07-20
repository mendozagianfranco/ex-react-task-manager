import { useEffect, useState } from 'react';

export default function useTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL_API}/tasks`)
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    const addTask = ({ title, description, status }) => {

        fetch(`${import.meta.env.VITE_URL_API}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description, status })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setTasks([...tasks, data.task]);
                } else {
                    throw new Error(data.message);
                }
            }).catch(error => console.error(error));


    };
    const removeTask = () => { };
    const updateTask = () => { };

    return { tasks, addTask, removeTask, updateTask };
}