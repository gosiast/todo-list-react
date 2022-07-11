import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";

const state = {
	todos: [
		{ id: 1, task: "Walk the dog", done: false },
		{ id: 2, task: "Water the flower", done: true },
	],
};

function mappingEachItem(todo) {
	return <TodoItem task={todo.task} />;
}

function App() {
	return (
		<div className="App">
			The app is here
			<ul>{state.todos.map(mappingEachItem)}</ul>
		</div>
	);
}

export default App;
