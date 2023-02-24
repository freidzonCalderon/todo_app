import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { FaPlus } from 'react-icons/fa';
import TodoDisplay from './TodoDisplay';

const TodoForm = () => {
	const [todo, setTodo] = useState({
		id: Math.random() * 10,
		task: '',
		status: false,
	});

	const [todoList, setTodoList] = useState([]);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		setTodoList(todoList.concat(todo));

		setTodo({
			id: Math.random() * 10,
			task: '',
			status: false,
		});
	};

	return (
		<div className='card container-sm shadow-lg'>
			<div className='container'>
				<h1 className='text-center pt-5 pb-3'>My To Do's</h1>
				<form className='row' onSubmit={onSubmitHandler}>
					<input
						className='inputTodo form-control col'
						type='text'
						required
						placeholder='Type a To Do...'
						onChange={(e) => {
							setTodo({ ...todo, task: e.target.value });
						}}
						value={todo.task}
					/>
					<button
						className='btn btn-outline-dark col-1'
						type='submit'
					>
						<FaPlus />
					</button>
				</form>

				<div className='container mt-5'>
					{todoList.length ? (
						<TodoDisplay
							todoList={todoList}
							setTodoList={setTodoList}
						/>
					) : (
						<h5 className='text-center'>There are no to-do's</h5>
					)}
				</div>
			</div>
		</div>
	);
};

export default TodoForm;
