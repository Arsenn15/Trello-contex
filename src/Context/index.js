import React, {useContext} from "react";

export const TasksContext = React.createContext({})
export const useTasksContext = () => {
    return useContext(TasksContext)
}
