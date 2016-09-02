const addCounter = (list) => {
  return list.concat([0]);
};

const removeCounter = (list, index) => {
  return list
    .slice(0, index)
    .concat(list.slice(index + 1));
};

const incrementCounter = (list, index) => {
  return list
    .slice(0, index)
    .concat([list[index] + 1])
    .concat(list.slice(index + 1));
};

export {
  addCounter,
  removeCounter,
  incrementCounter
};
