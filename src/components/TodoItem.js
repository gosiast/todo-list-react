import './TodoItem.css'
import React from 'react'

export default function TodoItem(props) {

    return (
        <li className="todoItem--wrapper">
            <p>{props.todo.task}</p>
            <button className="todoItem--remove" onClick={props.itemDelete}>x</button>
        </li>
    );
};

