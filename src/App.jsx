import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';
import { TaskProvider } from './contexts/GlobalContext';
import TaskDetail from './pages/TaskDetail';

function App() {
  return (
    <>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<TaskList />} />
              <Route path='/add-task' element={<AddTask />} />
              <Route path='/task/:id' element={<TaskDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </>
  );
}

export default App;
