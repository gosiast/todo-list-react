/**
 * Class component example
 *
 * on this TODO list we're gonna use the *class* component,
 * the old-fashioned style of React
 */

import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [
				{ id: 1, task: "Walk the dog", done: false },
				{ id: 2, task: "Water the flower", done: true },
			],
		};
	}

	// this way we can modify the state of the component
	// by using setState method from "this"
	// handleChangeTitle() {
	// 	this.setState({
	//  title: "This is a new title",
	// 	});
	// }

	onReturnedTask = (task) => {
		const quantitityOfTodos = this.state.todos.length + 1;
		const newTask = {
			id: quantitityOfTodos,
			task: task,
			done: false,
		};

		const newTodos = this.state.todos.map((todo) => todo);
		newTodos.push(newTask);

		this.setState({
			todos: newTodos,
		});
	};

	onDeleteItem = (todo) => {
		alert("you want to delete!");
	};

	render() {
		// destructuring of an object https://www.w3schools.com/react/react_es6_destructuring.asp
		const { todos } = this.state;

		return (
			<div className="app--wrapper">
				<div className="app--container">
					<h2>TO-DO list</h2>

					<ul className="app--todolist">
						{todos.map((todo) => (
							<TodoItem itemDelete={this.onDeleteItem} todo={todo} />
						))}
					</ul>
					<TodoForm returnedTask={this.onReturnedTask} />
				</div>
			</div>
		);
	}
}

export default App;
