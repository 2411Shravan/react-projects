import React from 'react'
import UserList from '../components/UserList';

const Users = () => {
  const USERS = [
    {
      id:"u1",
      name:"Shravan",
      image:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      places:3,
    }
    ];
  return <UserList items={USERS}/>;
};

export default Users;