const initialState = {
  guests: ['Tony Stark', 'Steve Rodgers', ' Nick Fury', 'Natasha Romanova', 'Clint Barton', 'Bruce Banner', 'Wanda Maximoff']
}

const ADD_NAME = 'ADD_NAME';
const REMOVE_NAME = 'REMOVE_NAME';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NAME:
      return Object.assign({}, state, {guests: [...state.guests, action.payload]});
    case REMOVE_NAME:
      return Object.assign({}, state, {guests: state.guests.filter((guest, i) => i !== action.payload)})
    default: return state;
  }
}

export function addGuest(name) {
  return {
    type: ADD_NAME,
    payload: name
  }
}
export function removeGuest(i) {
  return {
    type: REMOVE_NAME,
    payload: i
  }
}