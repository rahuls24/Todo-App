import React from 'react';
import DisplayTodo from './DisplayTodo';
import { TodoDetailContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { sort } from 'fast-sort';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function Homepage() {
	const { todoList } = React.useContext(TodoDetailContext);
	const navigate = useNavigate();
	const navigateToAddTodoPage = () => {
		navigate('/add-todo');
	};
	let tagsImportance = {
		true: 1,
		false: 2,
	};

	return (
		<>
			{todoList &&
				sort(todoList)
					.desc([todo => tagsImportance[todo.isCompleted], u => u.createdAt])
					.map(todo => {
						return <DisplayTodo todo={todo} key={todo.id} />;
					})}

			{todoList?.length === 0 && (
				<Box
					sx={{
						height: '80vh',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<DoNotDisturbIcon
						sx={{ fontSize: { xs: 100, sm: 120, md: 140, lg: 160, xl: 180 } }}
					/>
					<Typography
						variant='h6'
						component='div'
						noWrap
						color={'secondary'}
						sx={{ fontSize: { xs: 40, sm: 45, md: 55, lg: 65, xl: 75 } }}
					>
						{' '}
						No Todo{' '}
					</Typography>
					<Typography variant='subtitle2' component='div' noWrap color={'info'} 	sx={{ fontSize: { xs: 30, sm: 35, md: 45, lg: 55, xl: 65 } }}>
						Tap + to add one
					</Typography>
				</Box>
			)}
			<div className='add-todo'>
				<button onClick={navigateToAddTodoPage}>Add a book</button>
			</div>
		</>
	);
}

export default Homepage;
