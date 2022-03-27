import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomUserList from './components/UserList';
import ProjectList from './components/ProjectList';
import Menu from './components/menu';
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
      'todos': []
    }
  }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
          .then(response => {
            const users = response.data.results;
            this.setState({
              'users': users
            })
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
          </nav>
          <Routes>
            <Route exact path='/' element={<CustomUserList users={this.state.users}/>}/>
            <Route exact path='/projects/' element={<ProjectList projects={this.state.projects}/>}/>
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
