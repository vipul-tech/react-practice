
import './TodoApp.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import LoginComponent from './LoginComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ErrorComponent from './ErrorComponent'
import ListTodosComponent from './ListTodosComponent'
import WelcomeComponent from './WelcomeComponent'

export default function TodoApp() {
    return(
        <div className="TodoApp">
            <BrowserRouter>
            <HeaderComponent /> 
                <Routes>
                    <Route path='/logout' element={<LogoutComponent /> } />               
                    <Route path='*' element={<ErrorComponent /> }></Route>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}></Route>
                    <Route path='/todos' element={<ListTodosComponent /> } />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </div>
    )
}