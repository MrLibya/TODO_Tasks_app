export interface IToDoList {
    completed: Boolean,
    title: string,
    deadline: Date,
    startTime: Date,
    endTime: Date,
    remind: string,
    repeat: string
}

export declare type StoreState = {
    // exercise: Array<IExercise>
    todoList: IToDoList[]
}