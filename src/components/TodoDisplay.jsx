import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import '../App.css';

const TodoDisplay = ({ todoList, setTodoList }) => {
	const checkHandler = (id) => {
		const updatedTodoList = todoList.map((todo) => {
			if (todo.id === id) {
				return { ...todo, status: !todo.status };
			}
			return todo;
		});
		setTodoList(updatedTodoList);
	};

	const deleteHandler = (id) => {
		setTodoList(todoList.filter((todo) => todo.id !== id));
	};

	return (
		<div>
			{todoList.map((todo) => (
				<div
					className={
						todo.status ? 'mb-1 todoItemCompleted' : 'mb-1 todoItem'
					}
					key={todo.id}
				>
					<input
						className='form-check-label'
						type='checkbox'
						onClick={() => {
							checkHandler(todo.id);
						}}
						value={todo.status}
					/>
					<p
						className={
							todo.status ? 'text-decoration-line-through' : ''
						}
					>
						{todo.task}
					</p>
					<button
						className='btn btn-outline-danger'
						onClick={() => deleteHandler(todo.id)}
					>
						<FaTrashAlt />
					</button>
				</div>
			))}
		</div>
	);
};

export default TodoDisplay;
