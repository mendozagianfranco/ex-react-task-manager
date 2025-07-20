import { memo } from 'react';
import { Link } from 'react-router-dom';

export default memo(function TaskRow({ data }) {
    const { title, status, createdAt, id } = data;

    return (
        <>
            <tr className='task-row'>
                <td><Link to={`/task/${id}`}>{title}</Link></td>
                <td className={`${status === 'To do' ? 'to-do' : status === 'Doing' ? 'doing' : 'done'}`}>{status}</td>
                <td>{new Date(createdAt).toLocaleDateString()}</td>
            </tr>
        </>
    );
}); 