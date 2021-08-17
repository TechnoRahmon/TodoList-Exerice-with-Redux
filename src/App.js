import logo from './logo.svg';
import './App.css';
import {Provider } from 'react-redux'
import Store from './Redux/store'

import TodoList from './components/TodoList'
function App() {


  return (
    <div className="App text-light container pt-5">
      <Provider store={Store}>
        <TodoList/>

      </Provider>
    </div>
  );
}

export default App;
