const initialState = {
  people: [],
  detailView: false,
  personSelected: null,
  firstName: '',
  lastName: '',
  phone: 0,
  email: '',
  company: '',
  project: '',
  _id: '',
  toUpdate: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INITIAL_FETCH':
      return {
        ...state,
        people: action.payload,
      };
    case 'SELECTED_PERSON':
      return {
        ...state,
        detailView: true,
        personSelected: action.personSelected,
      };
    case 'NONE_SELECTED':
      return {
        ...state,
        detailView: false,
        personSelected: null,
      };
    case 'FORM_UPDATE':
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };

    case 'NEW_CONTACT':
      return {
        ...state,
        firstName: '',
        lastName: '',
        phone: 0,
        email: '',
        company: '',
        project: '',
        _id: '',
      };

    case 'ADD_PERSON':
      return {
        ...state,
        ...action.newPerson,
      };

    case 'UPDATE_CONTACT':
      return {
        ...state,
        toUpdate: true,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phone: action.payload.phone,
        email: action.payload.email,
        company: action.payload.company,
        project: action.payload.project,
        _id: action.payload._id,
      };

    case 'SAVE_CONTACT':
      return {
        ...state,
        toUpdate: false,
        detailView: false,
        personSelected: null,
        firstName: '',
        lastName: '',
        phone: 0,
        email: '',
        company: '',
        project: '',
        _id: '',
      };

    case 'DELETE_CONTACT':
      return {
        ...state,
        detailView: false,
        personSelected: null,
      };

    default:
      return state;
  }
};
