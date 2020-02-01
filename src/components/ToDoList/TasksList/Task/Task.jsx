import React, {Component} from 'react'
import './Task.css'


class Task extends Component {

    constructor(props) {

        super(props);


        this.parrentDeleteCallback = props.deleteCallback;
        this.parrentUpdateCallback = props.updateCallback;
    }

    deleteTask(e) {
        this.parrentDeleteCallback(this.props.task.id);
    }

    toggleTaskStatus(e) {

        /*var newTask= {
            ...this.state.task,
            isDone: !this.state.task.isDone
        };*/
        var task = {
            ...this.props.task
        };
        task.isDone = !task.isDone;
        this.parrentUpdateCallback(task);
    }


    render() {
        return (

            <div className={this.props.task.isDone ? 'task done' : 'task'}>
                <input className="check" type="checkbox" checked={this.props.task.isDone} onClick={this.toggleTaskStatus.bind(this)}/>
                <a className="task_text">{this.props.task.title}</a>
                <span className="delete" onClick={this.deleteTask.bind(this)}>X</span>
            </div>
        );
    }
}

export default Task;