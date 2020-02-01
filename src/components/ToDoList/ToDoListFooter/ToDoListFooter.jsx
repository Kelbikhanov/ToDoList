import React, {Component} from 'react'
import './ToDoListFooter.css'

class ToDoListFooter extends Component {

    handleFilterChanged(e) {
        this.props.onFilterChanges(e.currentTarget.dataset.value);
    }

    render() {
        var {tasks, filter, clearCompleted} = this.props;
        return (
            <div className="todolist_footer">
                <div className="item_style">
                    <span>{tasks.filter((t) => !t.isDone).length} items left</span>
                </div>
                <div className="buttons">
                    <button className={filter === 'all' ? 'selected' : ''}
                            data-value="all"
                            onClick={this.handleFilterChanged.bind(this)}>All
                    </button>
                    <button className={filter === 'active' ? 'selected' : ''}
                            data-value="active"
                            onClick={this.handleFilterChanged.bind(this)}>Active
                    </button>
                    <button className={filter === 'completed' ? 'selected' : ''}
                            data-value="completed"
                            onClick={this.handleFilterChanged.bind(this)}>Completed
                    </button>
                </div>
                <div className="btn">
                    <a className="btn_clear" onClick={clearCompleted}>Clear completed</a>
                </div>

            </div>
        )
    }
}

export default ToDoListFooter;
