import { useNavigate, useParams } from 'react-router-dom';
import { useContextTasks } from '../contexts/GlobalContext';


export default function TaskDetail() {
    const { id } = useParams();
    const { tasks, removeTask } = useContextTasks();
    const task = tasks.find(task => task.id === Number(id));
    const navigate = useNavigate();
    if (!task) {
        return (
            <h1>Task non trovata</h1>
        );
    }

    function deleteTask() {
        try {
            removeTask(task.id);
            alert('Task eliminata con successo');
            navigate('/');
        } catch (error) { alert(error); }
    }

    return (
        <>
            <h1>Titolo: {task.title}</h1>
            <p>Descrizione: {task.description}</p>
            <p>Stato: {task.status}</p>
            <p>Data di creazione: {new Date(task.createdAt).toLocaleDateString()}</p>
            <button onClick={deleteTask}>Elimina Task</button>
        </>
    );
}