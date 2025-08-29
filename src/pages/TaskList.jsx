import { useCallback, useMemo, useRef, useState } from 'react';
import TaskRow from '../components/TaskRow';
import { useContextTasks } from '../contexts/GlobalContext';

function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, delay);
    };
}

export default function TaskList() {

    const { tasks } = useContextTasks();
    const [sortBy, setSortBy] = useState('createdAt');
    const [sortOrder, setSortOrder] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const debouncedSetSearchQuery = useCallback(debounce(setSearchQuery, 500), []);

    function handleSort(field) {
        if (sortBy === field) {
            setSortOrder(prev => prev * -1);
        } else {
            setSortBy(field);
            setSortOrder(1);
        }
    }

    const filteredAndSortedTaks = useMemo(() => {
        const filteredTask = [...tasks].filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()));

        return filteredTask.sort((a, b) => {
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
    }, [tasks, sortBy, sortOrder, searchQuery]);


    return (
        <>
            <br />
            <label>
                Ricerca
                <input type="text" onChange={(e) => debouncedSetSearchQuery(e.target.value)} />
            </label>
            <table className='task-table'>
                <thead>
                    <tr className='task-header'>
                        <th onClick={() => handleSort('title')}>Nome</th>
                        <th onClick={() => handleSort('status')}>Stato</th>
                        <th onClick={() => handleSort('createdAt')}>Data di Creazione</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAndSortedTaks.map(task => (< TaskRow key={task.id} data={task} />))}
                </tbody>
            </table>
        </>
    );
}