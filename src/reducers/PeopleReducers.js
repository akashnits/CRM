import people from '../People.json';

const initialState = {
  people,
  detailView: false,
  personSelected: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED_PERSON':
      return {
        ...state,
        detailView: true,
        personSelected: action.personSelected,
      };
    case 'NONE_PERSON':
      return {
        ...state,
        detailView: false,
        personSelected: null,
      };
    default:
      return state;
  }
};
