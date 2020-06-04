import React from 'react';
import { Route, BrowserRouter, Switch, NavLink} from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import {Navbar, Nav} from 'react-bootstrap';
import NotFound from './components/NotFound';
import axios from 'axios';
import UploadPage from './components/UploadPage'
import Comments from './components/Comments';

class App extends React.Component {

  state ={
    allPosts : []
  }

  getBGS = () => {
    axios.get('/posts')
    .then(result => this.setState({ allPosts : result.data}))
    .catch(e => console.log(e))
  }

  componentDidMount(){
    this.getBGS()
    console.log(this.state.Allposts);
    
  }

  render(){
// {match} means i only want match from this.props not the whole props *
// find here return only the object that matches not an array 
  if (!this.state.allPosts.length) return <div className="App" />;

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="/">WhichBG?</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/upload">Upload</NavLink>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
        <Switch>

          <Route exact path="/" render={(props) => <Home {...props} allPosts={this.state.allPosts} />} />
          <Route exact path="/upload" component={UploadPage} />
          <Route path="/comments/:id" render={({match}) => {

            if(!this.state.allPosts) return <NotFound />
                
            return <Comments post={this.state.allPosts.find(post => post._id === match.params.id)} />
              }          
          } />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
  }
}

export default App;