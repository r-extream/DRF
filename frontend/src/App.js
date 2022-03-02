import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomUserList from './components/UserList'
import Menu from './components/menu';
import Footer from './components/footer';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'users': []
    }
  }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
          .then(response => {
            const users = response.data;
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
        <hr/>
        <CustomUserList users={this.state.users}/>
        <hr/>
        <Footer/>
      </div>
    )
  }
}


export default App;
