import { useReducer } from 'react';
import AlertReducer from './alertReducer';
import AlertContext from './alertContext';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  //   const intialState = {
  //     alerts: null,
  //   };
  const intialState = null;

  const [state, dispatch] = useReducer(AlertReducer, intialState);

  //   SET_ALERT

  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
