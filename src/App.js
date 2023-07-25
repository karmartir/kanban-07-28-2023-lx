import './App.css';
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Kanban from "./components/Kanban";
import {fetchStatuses} from "./api/StatusesServeses";
import {deleteTask, fetchTasks, postTask, updateTask} from "./api/TasksServeses";
import useFetching from "./hooks/useFetching";
import MyModal from "./components/ui/Modal/MyModal";
import CreateModal from "./components/CreateModal";
import DeleteModal from "./components/ui/DeleteModal/DeleteModal";


function App() {
    const openModalInitialState = {
        isOpen: false,
        mode: null,
        data: null
    }

    const [tasks, setTasks] = useState([])
    const [statuses, setStatuses] = useState([])

    const [openModal, setOpenModal] = useState(openModalInitialState)
    const [searchQuery, setSearchQuery] = useState('')


    const [getStatuses, isStatusesLoader, statusesError] = useFetching(async () => {
        const res = await fetchStatuses()
        setStatuses(res.data)
    })

    const [getTasks, isTasksLoader, tasksError] = useFetching(async () => {
        const res = await fetchTasks()
        setTasks(res.data)
    })

    //поиск! фильтруем и уравниваем по нижнему регистру затем сравниваем >>> task.name >>>> searchQuery>>
    const searchTasks = () => {
        return tasks.filter(task =>
            task.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    const searchedTasks = searchTasks();



    useEffect(() => {
        getStatuses()
        getTasks()
    }, [])

    const priorities = [1, 2, 3, 4, 5, 6]

    const createTask = async (newTask) => {
        try {
            await postTask(newTask)
            await getTasks()
        } catch (err) {
            alert("Task was not created")
        }
    }

    const changePriority = async (id, updatedTask) => {

        try {
            await updateTask(id, updatedTask)
            await getTasks()
        } catch (err) {
            alert("Task was not updated")
        }
    }

    const editTask = async (id, updatedTask) => {
        try {
            await updateTask(id, updatedTask)
            await getTasks();
        } catch (err) {
            alert('Task was not edited');
        }
    }
    const removeTask = async (id) => {
        try {
            await deleteTask(id)
            await getTasks()
        } catch (err) {
            alert("Task was not deleted")
        }
    }

    const changeStatus = async (id, status, direction) => {
        const statusesArray = statuses.map(status => status.title)
        const oldStatusIndex = statusesArray.indexOf(status)
        const newStatusIndex = oldStatusIndex + direction
        const updatedTask = {status: statusesArray[newStatusIndex]}
        try {
            await updateTask(id, updatedTask)
            await getTasks()
        } catch (err) {
            alert("Status was not updated")
        }
    }


    return (
        <div className="App">

            <h1 style={{backgroundColor: 'blue', color: 'white', padding: '15px'}}>K A N B A N</h1>


            <button type="button"
                    className="btn btn-secondary bg-warning m-3"
                    onClick={() => setOpenModal(
                        {
                            isOpen: true,
                            mode: "create",
                            data: ''
                        })}
            >
                <strong style={{color: 'white'}}>CREATE NEW TASK</strong>
            </button>

            <input type="text"
                   placeholder='find task'
                   value={searchQuery}
                   onChange={e => setSearchQuery(e.target.value)}
            />


            <Kanban
                isStatusesLoader={isStatusesLoader}
                isTasksLoader={isTasksLoader}
                statusesError={statusesError}
                tasksError={tasksError}
                statuses={statuses}
                tasks={searchedTasks}
                setOpenModal={setOpenModal}
                changePriority={changePriority}
                changeStatus={changeStatus}
                priorities={priorities}
                editTask={editTask}
            />

            <MyModal
                openModal={openModal}
                setOpenModal={setOpenModal}
            >
                <CreateModal
                    priorities={priorities}
                    statuses={statuses}
                    createTask={createTask}
                    setOpenModal={setOpenModal}
                />
                <DeleteModal
                    openModal={openModal}
                    removeTask={removeTask}
                    setOpenModal={setOpenModal}
                />
            </MyModal>

        </div>


    );
}

// https://expressjs-server.vercel.app/tasks
//     https://expressjs-server.vercel.app/statuses
export default App;
