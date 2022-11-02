import React, {useState} from "react";
import {useTasksContext} from "../../../Context";


export default function Task({task}) {

    const {handleEditTask, handleDeleteTask} = useTasksContext()
    const [isShowEditButton, setIsShowEditButton] = useState(false)
    const [newTitle, setNewTitle] = useState(task.title)
    const [newDescription, setNewDescription] = useState(task.description)
    const [newCategory, setNewCategory] = useState(task.category)
    const [newStatus, setNewStatus] = useState(task.status)

    const handleDoneButton = () => {
        handleEditTask(task._id, newTitle, newDescription, newStatus, newCategory)
        setIsShowEditButton(!isShowEditButton)
    }


    return (
        <div className={"TaskContainer"}>
            <div>{task.title}</div>
            <div className={"description"}>{task.description}</div>
            <div>{task.category}</div>
            {
                isShowEditButton
                    ?
                    <div className={"editMod-box"}>
                        <div className={"editMod"}>
                            <input onChange={(e) => setNewTitle(e.target.value)}
                                   defaultValue={newTitle}
                                   type="text"/>
                            <textarea defaultValue={newDescription}
                                   onChange={(e) => setNewDescription(e.target.value)}
                                   type="text"/>

                            <select defaultValue={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
                                <option>JS</option>
                                <option>ILLUMITY</option>
                                <option>MOLTONIC</option>
                                <option>MITROC</option>
                                <option>SLAMBDA</option>
                                <option>COREPAN</option>
                                <option>PHORMULA</option>
                            </select>
                            <select defaultValue={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                                <option>todo</option>
                                <option>done</option>
                                <option>blocked</option>
                                <option>inProgress</option>
                            </select>
                            <div className={"button"}>
                                <button onClick={handleDoneButton}>Done</button>
                                <button onClick={(e) => setIsShowEditButton(!isShowEditButton)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={"button"}>
                        <button className={"editButton"} onClick={(e) => setIsShowEditButton(!isShowEditButton)}>Edit</button>
                        <button className={"deleteButton"} onClick={(e) => handleDeleteTask(task._id)}>Delete</button>
                    </div>
            }
        </div>
    )
}
