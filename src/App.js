import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { bindActionCreators } from 'redux';
import getEmployee from './action';
import Employees from '../src/containers/employees';
import EmployeesBirthday from '../src/containers/employeesBirthDay';

const App = (props) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const { users } = props;

  useEffect(() => {
    props.getEmployee();
  }, []);

  const onUserCheckedHandler = (e, user) => {
      const findUsers = selectedUsers.find((el) => el.id === user.id);

    if (findUsers) {
      setSelectedUsers(selectedUsers.filter((el) => el.id !== user.id));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  return (
    <div className="container">
      <Employees users={users} onUserChecked={onUserCheckedHandler} />
      <EmployeesBirthday users={users} selectedUsers={selectedUsers} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEmployee: bindActionCreators(getEmployee, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
