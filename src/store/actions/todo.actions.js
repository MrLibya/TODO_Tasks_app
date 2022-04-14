import { updateDBTodoList } from "../../utli/databaseHelper";

export default {
    addItem: (item) => ({ getState, setState }) => {
        setState({ todoList: [...getState().todoList, item] });
        updateDBTodoList(getState().todoList);
    },
    updateList: (list) => ({ setState }) => {
        setState({ todoList: list })
    },
    toggleTask: (index) => ({ getState, setState }) => {
        let list = [...getState().todoList];
        const updatedTask = { ...list[index], completed: !list[index].completed };
        
        list[index] = updatedTask;
        setState({ todoList: list })

    }
}