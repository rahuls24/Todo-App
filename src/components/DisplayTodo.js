/* eslint-disable eqeqeq */
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { TodoDetailContext } from '../App';
function DisplayTodo(props) {
	let { todoList, setTodoList } = React.useContext(TodoDetailContext);
	let checkBoxRef = React.useRef(false);
	const deleteTodoHandler = id => {
		const updatedTodoList = todoList.filter(todo => todo.id != id);
		localStorage.setItem('v-1-todoList', JSON.stringify(updatedTodoList));
		setTodoList(updatedTodoList);
	};
	const toggleTodoState = id => {
		if (checkBoxRef.current === true) {
			for (let index = 0; index < todoList.length; index++) {
				let todo = todoList[index];
				if (todo.id == id) {
					todoList[index].isCompleted = false;
					checkBoxRef.current = false;
				}
			}
			localStorage.setItem('v-1-todoList', JSON.stringify(todoList));
			setTodoList([...todoList]);
			return;
		}
		for (let index = 0; index < todoList.length; index++) {
			let todo = todoList[index];
			if (todo.id == id) {
				todoList[index].isCompleted = true;
				checkBoxRef.current = true;
			}
		}
		localStorage.setItem('v-1-todoList', JSON.stringify(todoList));
		setTodoList([...todoList]);
	};
	const { todo } = props;
	return (
		<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
			<ListItem
				key={todo.id}
				secondaryAction={
					<IconButton edge='end' aria-label='comments'>
						<DeleteIcon
							onClick={() => deleteTodoHandler(todo.id)}
							fontSize='large'
							sx={{ fontSize: { xs: 48, sm: 54, md: 60, lg: 66, xl: 74 } }}
						/>
					</IconButton>
				}
				disablePadding
				style={{ width: '100%' }}
			>
				<ListItemButton
					role={undefined}
					dense
					onClick={() => toggleTodoState(todo.id)}
				>
					<ListItemIcon>
						<Checkbox
							ref={checkBoxRef}
							edge='start'
							tabIndex={-1}
							disableRipple
							checked={todo.isCompleted}
							size='large'
							sx={{
								'& .MuiSvgIcon-root': {
									fontSize: { xs: 48, sm: 48, md: 58, lg: 64, xl: 74 },
								},
							}}
						/>
					</ListItemIcon>
					<ListItemText
						id={'labelId'}
						primary={`${todo.text}`}
						sx={
							todo.isCompleted && {
								textDecoration: 'line-through',
								fontSize: 60,
							}
						}
					/>
				</ListItemButton>
			</ListItem>
		</List>
	);
}

export default DisplayTodo;
