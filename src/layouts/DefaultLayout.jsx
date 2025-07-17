import { NavLink, Outlet } from 'react-router-dom';

export default function DefaultLayout() {
    return (
        <>
            <NavLink to='/'>Lista Task</NavLink>
            <NavLink to='/add-task' >Aggiungi Task</NavLink>
            <Outlet />
        </>
    );
};