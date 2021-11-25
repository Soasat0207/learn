import './App.scss';
import TodoList from './Components/TodoList'
import TodoForm from './Components/TodoForm'
import PostList from './Components/PostList'
import Pagination from './Components/pagination'
import QueryString from 'query-string'
import React, { useEffect, useState } from 'react'
import PostFiltersForm from './Components/PostFiltersFrom';
function App() {
  const [postList,setPostList]= useState([]);
  const [todoList,setTodoList]= useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);
  const [pagination,setPagination]= useState({
    _page: 1,
    _limit:10,
    _totalRows:11,
  })
  const [filters,setFilters]= useState({
    _page: 1,
    _limit:10,
  })
  useEffect(()=>{
     const fetchPostList = async ()=>{
       try {
        const queryString = QueryString.stringify(filters);
        const requestUrl =`http://js-post-api.herokuapp.com/api/posts?${queryString}`;
        const response = await fetch(requestUrl);
        const responseJson = await response.json();
        const {data ,pagination} = responseJson;
        setTodoList(data);
        setPagination(pagination);
       } catch (error) {
         console.error(error.message)
       }
     }
     fetchPostList();
    },[filters])
  const handleTodoClick = (todo) =>{
    const index = todoList.findIndex(x => x.id === todo.id);
    if(index < 0) return;
    const newTodoList =[...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  const handleTodoFormSubmit =(formValues)=>{
    const newTodoList =[...todoList,formValues];
    setTodoList(newTodoList)
  }
  const handlePageChange = (newPage) =>{
    setFilters({
      ...filters,
      _page: newPage,
    })
  }
  const handleFilltersChange = (newFilters) =>{
    console.log(newFilters);
  }
  return (
    <div className="app">
      <h1>ReactHook-todoList</h1>
      <PostFiltersForm onSubmit={handleFilltersChange}/>
      {/* <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm> */}
      {/* <TodoList
      todos={todoList}
      onTodoClick={handleTodoClick}
      ></TodoList> */}
      <PostList posts={todoList}></PostList>
      <Pagination
      pagination={pagination}
      onPageChange={handlePageChange}
      ></Pagination>
    </div>
  );
}

export default App;
