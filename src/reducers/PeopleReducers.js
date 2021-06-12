import people from '../People.json';

const initialState = {
  people,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
