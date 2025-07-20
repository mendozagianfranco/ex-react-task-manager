import { useMemo, useRef, useState } from 'react';
import { useContextTasks } from '../contexts/GlobalContext';



const symbols = "!@#$%^&*()-_=+[]{}|;:\'\",.<>?/`~";

export default function AddTask() {
    const [title, setTitle] = useState('');
    const description = useRef();
    const status = useRef();
    const { addTask } = useContextTasks();

    const isValidTitle = useMemo(() => {
        const charsValid = title.split('').some(char => symbols.includes(char.toLowerCase()));
        const isNotEmpty = title.trim().length > 0;
        return !charsValid && isNotEmpty;
    }, [title]);

    function handleForm(e) {
        e.preventDefault();
        if (!isValidTitle) return;
        const task = {
            title: title,
            description: description.current.value,
            status: status.current.value
        };
        try {
            addTask(task);
            alert('Task create con successo');
            setTitle('');
            description.current.value = '';
            status.current.value = '';
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <label>
                    <p>Nome Task</p>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" />
                    {!isValidTitle && <div style={{ color: 'red' }}>Il titolo contiene caratteri speciali o è vuoto</div>}
                </label>
                <label>
                    <p>Descrizione</p>
                    <input type="text" ref={description} />
                </label>
                <label>
                    <p>Stato</p>
                    <select ref={status}>
                        <option value="To do">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </label>
                <button>Aggiungi Task</button>
            </form>
        </>
    );
};