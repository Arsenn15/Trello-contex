import './App.css';
import React, {useEffect, useState} from "react";
import Tasks from "./Components/Tasks";
import {DataTasksList} from "./Data";
import {TasksContext} from "./Context";


function App() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(DataTasksList)
    }, [])

    const handleEditTask = (id, newTitle, newDescription, newStatus, newCategory) => {
        setTasks(tasks.map(task => {
            if (id === task._id) {
                task.title = newTitle || task.title;
                task.description = newDescription;
                task.status = newStatus;
                task.category = newCategory
            }
            return task;
        }))
    }

    const handleAddTask = (newTitle, newDescription, newStatus, newCategory) => {
        setTasks([
            ...tasks,
            {
                title: newTitle,
                description: newDescription,
                status: newStatus,
                category: newCategory,
                _id: Math.random()
            }
        ])
    }


    return (
        <TasksContext.Provider value={{handleEditTask, handleAddTask}}>
            <div className={"container"}>
                <Tasks
                    status={"blocked"}
                    filteredTask={tasks.filter(task => task.status === "blocked")}
                />
                <Tasks
                    status={"todo"}
                    filteredTask={tasks.filter(task => task.status === "todo")}
                />
                <Tasks
                    status={"inProgress"}
                    filteredTask={tasks.filter(task => task.status === "inProgress")}
                />
                <Tasks
                    status={"done"}
                    filteredTask={tasks.filter(task => task.status === "done")}
                />
            </div>
        </TasksContext.Provider>
    );
}

export default App;
