/**
 * Class component example
 *
 * On this TodoList we are gonna use "class" based components
 * the old fashion style of react development.
 */

import "./App.css";
import React from 'react';
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			todos: [
				{ id: 1, task: 'Walk the dog', done: false },
				{ id: 2, task: 'Water the flower', done: true }
			]
		};
	}

	// On this way we can modify the state of the component
	// by using "setState" method from "this"
	// handleChangeTitle() {
	// 	this.setState({
	// 		title: 'This is a new title'
	// 	})
	// }

	onReturnedTask = (task) => {
		const quantityOfTodos = this.state.todos.length + 1;
		const newTask = {
			id: quantityOfTodos,
			task: task,
			done: false
		};

		const newTodos = this.state.todos.map((todo) => todo);
		newTodos.push(newTask);

		this.setState({
			todos: newTodos
		})

	}

	onDeleteItem = () => {
		alert("I want to delete")
	}

	render() {
		// destructuring of an object https://www.w3schools.com/react/react_es6_destructuring.asp
		const { todos } = this.state;

		return (
			<div className="app--wrapper">
				<div className="app--container">
					<h2>TO-DO list</h2>

					<ul className="app--todoList">
						{todos.map((todo) =>
							<TodoItem itemDelete={this.onDeleteItem} todo={todo} />
						)}
					</ul>

					<TodoForm returnedTask={this.onReturnedTask} />
				</div>
			</div>
		);
	}
}

export default App;
