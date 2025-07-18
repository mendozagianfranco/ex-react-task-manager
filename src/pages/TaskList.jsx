import TaskRow from '../components/TaskRow';
import { useTask } from '../contexts/GlobalContext';

export default function TaskList() {

    const { tasks } = useTask();
    return (
        <table className='task-table'>
            <thead>
                <tr className='task-header'>
                    <th>Nome</th>
                    <th>Stato</th>
                    <th>Data di Creazione</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task => (< TaskRow key={task.id} data={task} />))}
            </tbody>
        </table>
    );
}