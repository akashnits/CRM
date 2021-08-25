export const selectPerson = personSelected => {
  return {
    type: 'SELECTED_PERSON',
    personSelected: personSelected,
  };
};

export const noneSelected = () => {
  return {
    type: 'NONE_SELECTED',
  };
};

export const formUpdate = ({prop, value}) => {
  return {
    type: 'FORM_UPDATE',
    payload: {prop, value},
  };
};

export const createNewContact = ({
  firstName,
  lastName,
  phone,
  email,
  company,
  project,
}) => {
  return dispatch => {
    const requestOptions = {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        company: company,
        project: project,
      }),
    };
    fetch('http://192.168.1.21:3000/contact', requestOptions) //change to your IP
      .then(response => console.log(response))
      .then(() => {
        dispatch({type: 'NEW_CONTACT'});
      })
      .catch(error => console.log(error));
  };
};

export const loadInitialContacts = () => {
  return dispatch => {
    const requestOptions = {
      method: 'GET',
    };
    fetch('http://192.168.1.21:3000/contact', requestOptions)
      .then(response => {
        return response.json();
      })
      .then(data => dispatch({type: 'INITIAL_FETCH', payload: data}))
      .catch(error => console.log(error));
  };
};

export const deleteContact = id => {
  return dispatch => {
    const requestOptions = {
      method: 'DELETE',
    };
    fetch(`http://192.168.1.21:3000/contact/${id}`, requestOptions)
      .then(dispatch({type: 'DELETE_CONTACT'}))
      .catch(error => console.log(error));
  };
};

export const updateContact = person => {
  return {
    type: 'UPDATE_CONTACT',
    payload: person,
  };
};

export const saveContact = ({
  firstName,
  lastName,
  phone,
  email,
  company,
  project,
  _id,
}) => {
  return dispatch => {
    const requestOptions = {
      method: 'PUT',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        company: company,
        project: project,
        id: _id,
      }),
    };
    fetch(`http://192.168.1.21:3000/contact/${_id}`, requestOptions) //change to your IP
      .then(response => console.log(response))
      .then(() => {
        dispatch({type: 'SAVE_CONTACT'});
      })
      .catch(error => console.log(error));
  };
};
