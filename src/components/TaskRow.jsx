import { memo } from 'react';

export default memo(function TaskRow({ data }) {
    const { title, status, createdAt } = data;

    return (
        <>
            <tr className='task-row'>
                <td>{title}</td>
                <td className={`${status === 'To do' ? 'to-do' : status === 'Doing' ? 'doing' : 'done'}`}>{status}</td>
                <td>{new Date(createdAt).toLocaleDateString()}</td>
            </tr>
        </>
    );
}); 