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
    const removeTask = (taskId) => {

        fetch(`${import.meta.env.VITE_URL_API}/tasks/${taskId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setTasks(prev => prev.filter(task => task.id !== taskId));
                } else {
                    throw new Error(data.message);
                }
            });
    };
    const updateTask = (updatedTask) => {
        fetch(`${import.meta.env.VITE_URL_API}/tasks/${updatedTask.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setTasks(prev => prev.map(t => t.id === data.task.id ? data.task : t));
                } else {
                    throw new Error(data.message);
                }
            }).catch(error => console.error(error));
    };

    return { tasks, addTask, removeTask, updateTask };
}