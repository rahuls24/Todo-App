import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditTodo from './components/EditTodo';
import Header from './components/Header';
import Homepage from './components/Homepage';
export const TodoDetailContext = React.createContext(null);
function App() {
	const [todoList, setTodoList] = React.useState([]);
	const props = {
		todoList,
		setTodoList,
	};
	React.useEffect(() => {
	
	}, [todoList]);
	React.useEffect(() => {
		const previousStoredTodos = localStorage.getItem('v-1-todoList');
		console.log(todoList,previousStoredTodos,24);
		if (previousStoredTodos) setTodoList(JSON.parse(previousStoredTodos));
	}, []);
	return (
		<>
			<Header />
			<TodoDetailContext.Provider value={props}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Homepage />}></Route>
						<Route path='/add-todo' element={<EditTodo />}></Route>
					</Routes>
				</BrowserRouter>
			</TodoDetailContext.Provider>
		</>
	);
}

export default App;
