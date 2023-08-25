import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Practice from "./components/practice.js";


export default function App() {
  return (
      <Practice/> 
  )
  // return (
  //   <Router>
  //     <main className="app">
  //       <Switch>
  //         <Route exact path="/" component={Practice} />
  //       </Switch>
  //     </main>
  //   </Router>
  // )
}
