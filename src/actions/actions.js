const actionCreators = {
  increment: () => ({
    type: 'INCREMENT',
  }),
  decrement: () => ({
    type: 'DECREMENT',
  }),
  changeInput: (input) => ({
    input,
    type: 'CHANGE',
  }),
};

export default actionCreators;
