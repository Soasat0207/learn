import Header from  './component/header';
import Todos from './component/Todo';
import React ,{Fragment} from 'react';
import './App.css';

// viết theo kiểu hook
const App =()=>{
  return (
    <Fragment>
      <Header />
      <Todos />
    </Fragment>
  );
}

export default App;
