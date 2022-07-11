import "./App.css";
import TodoItem from "./components/TodoItem";


const state = {
	todos: [
		{ id: 1, task: 'Walk the dog', done: false },
		{ id: 2, task: 'Water the flower', done: true }
	]
}

function mappingEachTodo(todo) {
	return (
		<TodoItem task={todo.task} />
	)
}

function App() {
	return (
		<div className="app--wrapper">
			<div className="app--container">
				Todo list app is gonna be here

				<ul>
					{state.todos.map(mappingEachTodo)}
				</ul>
			</div>
		</div>
	);
}

export default App;
