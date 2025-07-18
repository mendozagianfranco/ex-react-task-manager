import { useMemo, useRef, useState } from 'react';


const symbols = "!@#$%^&*()-_=+[]{}|;:\'\",.<>?/`~";

export default function AddTask() {
    const [title, setTitle] = useState('');
    const description = useRef();
    const status = useRef();

    const isValidTitle = useMemo(() => {
        const charsValid = title.split('').some(char => symbols.includes(char.toLowerCase()));
        return charsValid && title.trim();
    }, [title]);

    function handleForm(e) {
        e.preventDefault();
        const task = {
            title: title,
            description: description.current.value,
            status: status.current.value
        };
        console.log(task);
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <label>
                    <span>Nome Task</span>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" />
                    {isValidTitle && <div>Il titolo contiene caratteri speciali o è vuoto</div>}
                </label>
                <label>
                    <span>Descrizione</span>
                    <input type="text" ref={description} />
                </label>
                <label>
                    <span>Stato</span>
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