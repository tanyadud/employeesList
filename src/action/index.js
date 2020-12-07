import axios from 'axios';
import { GET_EMPLOYEE, GET_EMPLOYEE_SUCCESS } from './types';

const getEmployee = () => {
  return (dispatch) => {
    dispatch({ type: GET_EMPLOYEE });

    return axios
      .get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then((res) => {
        console.log('res', res);
        dispatch({
          type: GET_EMPLOYEE_SUCCESS,
          payload: res.data,
        });
      });
  };
};

export default getEmployee;
