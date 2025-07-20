import { useParams } from 'react-router-dom';
import { useContextTasks } from '../contexts/GlobalContext';


export default function TaskDetail() {
    const { id } = useParams();
    const { tasks } = useContextTasks();
    const { title, description, status, createdAt } = tasks.find(task => task.id === Number(id));

    return (
        <>
            <h1>Titolo: {title}</h1>
            <p>Descrizione: {description}</p>
            <p>Stato: {status}</p>
            <p>Data di creazione: {new Date(createdAt).toLocaleDateString()}</p>
            <button onClick={() => console.log('Elimino Task')}>Elimina Task</button>
        </>
    );
}