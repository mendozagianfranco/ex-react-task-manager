import { useNavigate, useParams } from 'react-router-dom';
import { useContextTasks } from '../contexts/GlobalContext';
import Modal from '../components/Modal';
import { useState } from 'react';


export default function TaskDetail() {
    const { id } = useParams();
    const { tasks, removeTask } = useContextTasks();
    const task = tasks.find(task => task.id === Number(id));
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

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
            <button onClick={() => setShow(true)}>Elimina Task</button>
            <Modal
                title={'Conferma Eliminazione'}
                show={show}
                onClose={() => setShow(false)}
                onConfirm={deleteTask} />
        </>
    );
}