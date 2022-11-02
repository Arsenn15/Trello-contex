import React, {useState} from "react";
import {useTasksContext} from "../../Context";
import Task from "./Task";

export default function Tasks({filteredTask, status}) {

    const {handleAddTask} = useTasksContext()
    const [isShowAddButton, setIsShowAddButton] = useState(true)
    const [addTitle, setAddTitle] = useState("")
    const [addDescription, setAddDescription] = useState("")
    const [addCategory, setAddCategory] = useState("JS")


    const handelAcceptButton = () => {
        handleAddTask(addTitle, addDescription, status, addCategory)
        setAddDescription("")
        setAddCategory("JS")
        setAddTitle("")
        setIsShowAddButton(!isShowAddButton)
    }


    return (
        <div className={"tasksContainer"}>
            <h2>{status}</h2>
            {
                filteredTask.map(task => <Task task={task}
                                               key={task._id}
                />)
            }
            {
                isShowAddButton
                    ?
                    <div className={"button"}>
                        <button className={"addButton"} onClick={(e) => setIsShowAddButton(!isShowAddButton)}>ADD</button>
                    </div>
                    :
                    <div className={"editMod-box"}>

                            <div className={"editMod"}>
                                <input onChange={(e) => setAddTitle(e.target.value)}
                                       defaultValue={addTitle}
                                       type="text"/>
                                <input defaultValue={addDescription}
                                       onChange={(e) => setAddDescription(e.target.value)}
                                       type="text"/>

                                <select defaultValue={addCategory} onChange={(e) => setAddCategory(e.target.value)}>
                                    <option>JS</option>
                                    <option>ILLUMITY</option>
                                    <option>MOLTONIC</option>
                                    <option>MITROC</option>
                                    <option>SLAMBDA</option>
                                    <option>COREPAN</option>
                                    <option>PHORMULA</option>
                                </select>
                                <select>
                                    <option>{status}</option>

                                </select>

                                <div className={"button"}>
                                    <button disabled={addTitle ? false : true} onClick={handelAcceptButton}>Accept</button>
                                    <button onClick={(e) => setIsShowAddButton(!isShowAddButton)}>Cancel</button>
                                </div>
                            </div>

                    </div>

            }
        </div>
    )
}
