import React, {Component} from 'react'
import './ToDoList.css'
import ToDoListTaskCreator from "./ToDoListTaskCreator/ToDoListTaskCreator";
import TasksList from "./TasksList/TasksList";
import ToDoListFooter from "./ToDoListFooter/ToDoListFooter";


class ToDoList extends Component {

    constructor() {

        super();

        this.state = {
            tasks: [
                {
                    id: 0,
                    title: "Купить хлеба",
                    isDone: false
                },
                {
                    title: "Оплатить коммуналку",
                    isDone: false
                }
            ],
            filter: "all"
        };
    }

    clearCompleted() {
        this.setState({
            tasks: this.state.tasks.filter(t => !t.isDone)
        });
    }

    changeFilter(filterValue) {
        this.setState({filter: filterValue})
    }


    createNewTask(task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        });
    }

    deleteTask(taskId) {

        const newTaskList = this.state.tasks.filter((t) => {
            return t.id !== taskId;
        });
        this.setState({
            tasks: newTaskList
        });
    }

    upDateTask(task) {

        const newTaskList = [...this.state.tasks];

        newTaskList.forEach((t) => {
            if (t.id === task.id) {
                t.isDone = task.isDone;
                return;
            }
        });
        this.setState({
            tasks: newTaskList
        });
    }


    render() {
        var {tasks, filter} = this.state;

        var filteredTasks = [];
        if (filter === 'all') filteredTasks = tasks;
        if (filter === 'active') filteredTasks = tasks.filter(t => !t.isDone);
        if (filter === 'completed') filteredTasks = tasks.filter(t => t.isDone);

        return (
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="todolist_left">
                                <h3 className="h3">TODOLIST</h3>
                                <p>Todolist — это простой список дел или список задач.
                                    Запиши в него все свои важные дела, чтобы не забыть.
                                    «Список дел» позволит вам эффективно организовать свое рабочее время.
                                    В него можно записать все: от списка покупок до важных деловых встреч.
                                    Создай свой «список задач» прямо сейчас, это не займет много времени.</p>
                                </div>
                
                <div className="todolist_right">
                    <ToDoListTaskCreator onCreate={this.createNewTask.bind(this)}/>

                    <TasksList tasks={filteredTasks}
                               onDelete={this.deleteTask.bind(this)}
                               onUpdate={this.upDateTask.bind(this)}/>

                    <ToDoListFooter tasks={tasks} filter={filter}
                                    onFilterChanges={this.changeFilter.bind(this)}
                                    clearCompleted={this.clearCompleted.bind(this)}/>
                </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default ToDoList;