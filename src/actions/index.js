export const selectPerson = personSelected => {
  return {
    type: 'SELECTED_PERSON',
    personSelected: personSelected,
  };
};

export const nonePerson = () => {
  return {
    type: 'NONE_SELECTED',
  };
};
