// Total up all expenses in the expenses object and return
// that value

export default (expenses) => {
  if (expenses.length === 0) {
    return 0;
  } else {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const total = expenses.map((expense) => {
      return expense.amount
    }).reduce(reducer);
    return total;
  }
};
