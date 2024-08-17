import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Greeting />
      <Counter />
      <FormInput />
      <TodoList />
    </div>
  );
}

export default App;


