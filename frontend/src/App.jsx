import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/home/Home.jsx'
import SignIn from './components/sign-in/SignIn.jsx'
import SignUp from './components/sign-up/SignUp.jsx'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={ <Home /> }/>
				<Route path='/sign-in' element={ <SignIn /> }/>
				<Route path='/create-account' element={ <SignUp /> }/>
			</Routes>
		</BrowserRouter>
	)
}