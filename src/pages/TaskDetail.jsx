import { useParams } from 'react-router-dom';
import { useContextTasks } from '../contexts/GlobalContext';


export default function TaskDetail() {
    const { id } = useParams();
    const { tasks } = useContextTasks();
    const task = tasks.find(task => task.id === Number(id));

    if (!task) {
        return (
            <h1>Task non trovata</h1>
        );
    }

    return (
        <>
            <h1>Titolo: {task.title}</h1>
            <p>Descrizione: {task.description}</p>
            <p>Stato: {task.status}</p>
            <p>Data di creazione: {new Date(task.createdAt).toLocaleDateString()}</p>
            <button onClick={() => console.log('Elimino Task')}>Elimina Task</button>
        </>
    );
}