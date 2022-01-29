/* eslint-disable eqeqeq */
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useNavigate } from 'react-router-dom';
import { TodoDetailContext } from '../App';
import { v4 as uuidv4 } from 'uuid';
function EditTodo() {
	const { setTodoList } = React.useContext(TodoDetailContext);
	const [todoText,setTodoText]= React.useState('');
	const [isTodoInputError,setTodoInputError] = React.useState(false)
	const navigate = useNavigate();
	const navigateToHomePage = () => {
		navigate('/');
	};
	const saveTodoHandler = () => {
		if(todoText.trim()==""){
			setTodoInputError(true)
			return
		}
		const todo = {
			id: uuidv4(),
			text:todoText,
			isCompleted:false,
			createdAt:new Date()
		}
		setTodoList(prevState=>{
			localStorage.setItem('v-1-todoList', JSON.stringify([...prevState,todo]));
			return [...prevState,todo]
		})
		navigateToHomePage()
	};
	const todoTextHandler = (text) =>{
		if(text.trim()==""){
			setTodoInputError(true)
			setTodoText(text)
			return
		}
		if(isTodoInputError) setTodoInputError(false)
		setTodoText(text)
	}
	return (
		<>
			<Box
				sx={{
					maxWidth: '100%',
					mt: 2,
					ml: 2,
					mr: 2,
				}}
			>
				<TextField
					fullWidth
					label='Add TODO'
					id='fullWidth'
					multiline
					maxRows={15}
					error={isTodoInputError}
					helperText={isTodoInputError?"Please enter text to save":''}
					value={todoText}
					onChange={(e)=> todoTextHandler(e.target.value)}
				/>
				<Button
					variant='contained'
					fullWidth={true}
					endIcon={<AddTaskIcon />}
					sx={{
						maxWidth: '100%',
						mt: 2,
					}}
					onClick={saveTodoHandler}
				>
					Save
				</Button>
			</Box>
			<div className='go-back'>
				<button onClick={navigateToHomePage}>Add a book</button>
			</div>
		</>
	);
}

export default EditTodo;
