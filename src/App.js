import React from "react";
import "./App.css";
import Privacy from "./components/Privacy"
import OnlineUser from "./components/OnlineUser";
import Terms from "./components/Terms"
import Blog from "./components/Blog/Blog"
import BlogDetail from "./components/Blog/BlogDetail"
import Agent from"./components/Agent"
import About from './components/About'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  browserHistory
} from "react-router-dom";

class App extends React.Component {
  render() {
    
    return (
      <div>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
        
        
        <Router>
          <Switch>
            <Route path="/OnlineUser" exact component={OnlineUser}/>
            <Route path="/Terms" exact component={Terms}/>
            <Route path="/Privacy" exact component={Privacy}/>
            <Route path="/Blog" exact component={Blog}/>
            <Route path="/BlogDetail" exact component={BlogDetail}/>
            <Route path="/Agent" exact component={Agent}/>
            <Route path="/About" exact component={About}/>
            <Route path="/"  component={Home}/>
          </Switch>
        </Router>
        
        
      </div>
    );
  }
}

// function App() {
//   return (
//     // <div className="App">
//       <Header/>

//     // </div>
//   );
// }

export default App;
