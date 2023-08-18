const STATUS = {
  PENDING: 'pending',
  FULLFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

// очикувач
const pendinger = state => {
  state.isLoading = true;
};
// універсальний виконавець
const fulfilderUniversall = state => {
  state.isLoading = false;
  state.error = null;
};

// виконавець вантажник
const fulfilder = (state, { payload }) => {
  state.items = payload;
  // console.log(payload);
};
// виконавець додавач
const fulfilderAdder = (state, { payload }) => {
  state.items.push(payload);
};
// виконавець стирач
const fulfildDeliter = (state, { payload }) => {
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
};
// обломщик
const rejecter = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export {
  STATUS,
  pendinger,
  fulfilderUniversall,
  fulfilder,
  fulfilderAdder,
  fulfildDeliter,
  rejecter,
};
