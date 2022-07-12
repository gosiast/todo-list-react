import React from "react";
import "./TodoItem.css";

export default function TodoItem(props) {
	return (
		<li className="todoItem--wrapper">
			<p>{props.todo.task}</p>
			<button className="todoItem--remove" onClick={props.itemDelete}>
				x
			</button>
		</li>
	);
}
