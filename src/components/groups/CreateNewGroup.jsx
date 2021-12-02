import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { URLS } from "../constants/urls";
import {createGroup, searchUser } from "../redux/actions/group";
import Searchbar from "./Searchbar";


const CreateNewGroup = (props) => {
  const {users} = props;
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [usersList,setUsersList] = useState([]);
  const [error, setError] = useState({ Title: '' , usersList: ''});


  const onSearchSubmit = (value) => {
    const { searchUser } = props;
    searchUser(value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("formsubmit");
    const errors = { };
    const arr = usersList.map((user) => user.id);
    console.log(arr);
    if(Title.length === 0) errors.Title="Title can't be empty";
    if (arr.length === 0) errors.usersList = "userlist can't be empty";
    const { createGroup } = props;
    if(Object.keys(errors).length === 0) {
      createGroup({Title, Description, usersList});
    } else {
        setError(errors);
    }
  }

  useEffect(() => {
    if(users) {
      console.log(users);
      setUsersList(users);
    }
  }, [users]);


  return (
    <div>
      <h4>Create New Group</h4>
      <form >
        <label>
          Title
          <input
            type="text"
            placeholder="Enter Group Title"
            value={Title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <h3>{error.Title}</h3>
        <label>
          Description
          <input
            type="text"
            placeholder="Enter Group Description"
            value={Description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <Searchbar onSearchSubmit={onSearchSubmit}/>
        <h3>{error.usersList}</h3>
        <button onClick={onFormSubmit}>Create</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.groupsReducer.search,
});

const mapDispatchToProps = (dispatch) => ({
  searchUser: (name) => dispatch(searchUser(name)),
  createGroup: (body) => dispatch(createGroup(body)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewGroup);
