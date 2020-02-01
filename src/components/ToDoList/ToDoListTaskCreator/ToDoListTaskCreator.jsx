import React, {Component} from 'react'


class ToDoListTaskCreator extends Component {

    constructor(props) {

        super(props);

        this.newIndex = 2;
    }


    createNewTask(e) {
        if (e.key === 'Enter') {
            var newTask = {
                title: e.currentTarget.value,
                isDone: false,
                id: this.newIndex
            };
            this.props.onCreate(newTask);
            e.currentTarget.value = '';
            this.newIndex++;
        }
    }


    render() {
        return (
            <div className="header">
                <input className="input" onKeyPress={this.createNewTask.bind(this)}/>
            </div>
        )
    }
}

export default ToDoListTaskCreator;