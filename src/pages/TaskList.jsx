import { useMemo, useState } from 'react';
import TaskRow from '../components/TaskRow';
import { useContextTasks } from '../contexts/GlobalContext';

export default function TaskList() {

    const { tasks } = useContextTasks();
    const [sortBy, setSortBy] = useState('createdAt');
    const [sortOrder, setSortOrder] = useState(1);

    function handleSort(field) {
        if (sortBy === field) {
            setSortOrder(prev => prev * -1);
        } else {
            setSortBy(field);
            setSortOrder(1);
        }
    }

    const sortedTask = useMemo(() => {
        return [...tasks].sort((a, b) => {
            let comparison;

            if (sortBy == 'title') {
                comparison = a.title.localeCompare(b.title);
            } else if (sortBy === 'status') {
                const statusOptions = ['To do', 'Doing', 'Done'];
                comparison = statusOptions.indexOf(a.status) - statusOptions.indexOf(b.status);
            } else if (sortBy === 'createdAt') {
                const dateA = new Date(a.createdAt).getTime();
                const dateB = new Date(b.createdAt).getTime();
                comparison = dateA - dateB;
            }

            return comparison * sortOrder;
        });
    }, [tasks, sortBy, sortOrder]);


    return (
        <table className='task-table'>
            <thead>
                <tr className='task-header'>
                    <th onClick={() => handleSort('title')}>Nome</th>
                    <th onClick={() => handleSort('status')}>Stato</th>
                    <th onClick={() => handleSort('createdAt')}>Data di Creazione</th>
                </tr>
            </thead>
            <tbody>
                {sortedTask.map(task => (< TaskRow key={task.id} data={task} />))}
            </tbody>
        </table>
    );
}