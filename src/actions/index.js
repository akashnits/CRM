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
