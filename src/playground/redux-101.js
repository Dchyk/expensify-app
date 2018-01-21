import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {} ) => ({
  type: 'INCREMENT',
  incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
});

const decrementCount = ({ decrementBy = 1 } = {} ) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ count = store.getState().count } = {} ) => ({
  type: 'SET',
  count
});

// Reducers
// 1. Reducers are pure functions
// 2. 

const countReducer = (state = { count: 0 }, action ) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      };
    default: 
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

console.log(store.getState());

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount({ incrementBy: 100 }));

store.dispatch(resetCount());

// RESET - set the count equal to zero

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 450 }));

console.log(store.getState());

store.dispatch(setCount());

console.log(store.getState());

store.dispatch(setCount({ count: 451 }));

console.log(store.getState());