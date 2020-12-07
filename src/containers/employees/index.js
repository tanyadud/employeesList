import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  EmployeeBox,
  EmployeeBoxes,
  Header2,
  LeftContainer,
  Letter,
  NameBox,
} from './employeesStyle';

const usersObj = {
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
  K: [],
  L: [],
  M: [],
  N: [],
  O: [],
  P: [],
  Q: [],
  R: [],
  S: [],
  T: [],
  U: [],
  V: [],
  W: [],
  X: [],
  Y: [],
  Z: [],
};

export default (props) => {
  const [columnsObj, setColumnsObj] = useState({});

  useEffect(() => {
    const usersCollection = { ...usersObj };

    props.users.forEach((el) => {
      const lastName = el.lastName[0];

      if (usersCollection[lastName]) {
        usersCollection[lastName].push(el);
      }
    });

    setColumnsObj(usersCollection);
  }, [props.users]);

  return (
    <LeftContainer>
      <Header2>Employees</Header2>
      <EmployeeBoxes>
        {Object.keys(columnsObj).map((key) => (
          <EmployeeBox key={key}>
            <Letter>{key}</Letter>

            {columnsObj[key].length ? (
              columnsObj[key].map((user) => (
                <NameBox key={user.id}>
                  {user.lastName} {user.firstName}
                  <Checkbox
                    type="checkbox"
                    onChange={(e) => props.onUserChecked(e, user)}
                  />
                </NameBox>
              ))
            ) : (
              <p>----</p>
            )}
          </EmployeeBox>
        ))}
      </EmployeeBoxes>
    </LeftContainer>
  );
};
