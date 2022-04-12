import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomUserList from './components/UserList';
import ProjectList from './components/ProjectList';
import Menu from './components/menu';
import LoginForm from "./components/LoginForm";
import Footer from './components/footer';
import axios from 'axios';
import {BrowserRouter, Link, Route, Routes, useLocation} from 'react-router-dom';
import TODOList from './components/TODOList';


const NotFound = () => {
    let location = useLocation()
    return (
        <div> Page {location.pathname} not found </div>
    )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'users': [],
      'projects': [],
      'todos': [],
      'token': ''
    }
  }

getData() {
    let headers = this.getHeader();

    axios.get('http://127.0.0.1:8000/api/users/', {headers})
      .then(response => {
        const users = response.data;
        this.setState({
          'users': users.results
        })
      })
      .catch(error => {
        console.log(error);
        this.setState({'users': []})
      });
    axios.get('http://127.0.0.1:8000/api/projects/', {headers})
      .then(response => {
        const projects = response.data;
        this.setState({
          'projects': projects.results
        })
      })
      .catch(error => {
        console.log(error);
        this.setState({'projects': []})
      });
    axios.get('http://127.0.0.1:8000/api/todo_items/', {headers})
      .then(response => {
        const todos = response.data;
        this.setState({
          'todos': todos.results
        })
      })
      .catch(
        error => {
          console.log(error);
          this.setState({'todos': []});
        }
      )
  }
    componentDidMount() {
    let token = localStorage.getItem('token');
    this.setState({'token': token}, this.getData);
  }

  isAuth() {
    return !!this.state.token
  }

  getHeader() {
    if (this.isAuth()) {
      return {'Authorization': 'Token ' + this.state.token}
    }
    return {}
  }

  logout() {
    localStorage.setItem('token', '');
    this.setState({'token': ''}, this.getData)
  }


  getToken(login, password) {
    axios.post('http://127.0.0.1:8000/api-get-token/', {'username': login, 'password': password})
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        console.log(response.data);
        this.setState({
          'token': token
        });
      }).then(() => {
        this.getData()
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Menu/>
        <BrowserRouter>
        <nav>
            <li><Link to='/'>Users</Link></li>
            <li><Link to='/projects/'>Projects</Link></li>
            <li><Link to='/todo_items/'>TODO</Link></li>
            <li>
              {this.isAuth() ? <button onClick={() => this.logout()}>Logout</button> : <Link to='/login/'>Login</Link>}
            </li>
          </nav>
          <Routes>
            <Route exact path='/' element={<CustomUserList users={this.state.users}/>}/>
            <Route exact path='/projects/' element={<ProjectList projects={this.state.projects}/>}/>
            <Route exact path='/login/'
                   element={<LoginForm getToken={(login, password) => this.getToken(login, password)}/>}/>
            <Route exact path='/todo_items/' element={<TODOList todos={this.state.todos}/>}/>
            <Route exact path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
        <hr/>
        <Footer/>
      </div>
    )
  }
}


export default App;
