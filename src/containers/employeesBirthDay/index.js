import React from 'react';
import { Header2} from '../employees/employeesStyle';
import { RightContainer } from './birthdayStyle';

export default (props) => {
  const convertDate = (d) => {
    if (d) {
      const date = new Date(d);
      const formattedDate = date.toLocaleDateString('en-BZ', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });

      return formattedDate;
    }
  };

  return (
    <RightContainer>
      <Header2>Employees birthday</Header2>
      <div>
        {props.selectedUsers.length ? (
          props.selectedUsers.map((user) => {
            return (
              <div key={user.id}>
                {user.lastName} {user.firstName} - {convertDate(user.dob)}
              </div>
            );
          })
        ) : (
          <p>No selected employees</p>
        )}
      </div>
    </RightContainer>
  );
};
