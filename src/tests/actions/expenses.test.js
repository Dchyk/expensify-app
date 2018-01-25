import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
import moment from 'moment';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });

  database.ref('expenses').set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({ 
    type: 'REMOVE_EXPENSE',
    id: '123abc'
   });
});

test('should return the edit expense object', () => {
  const action = editExpense('123', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

// Pass in done as an argument 
test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  }
  // Return a promise, then wait to pass or fail the test until
  // the promise is returned (see expenses actions)
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
      }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done(); // Call done as a function when the promise returns,
            // because this is asynchronous
  });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
      }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done(); // Call done as a function when the promise returns,
              // because this is asynchronous
  });
});

test('should set up set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should set expenses', () => {
  // dispatch an action
  const newExpenses = [{
    id: '4',
    description: 'juice',
    note: '',
    amount: 16569,
    createdAt: 0
  }, {
    id: '5',
    description: 'Garbage pails',
    note: '',
    amount: 1096500,
    createdAt: moment(0).subtract(43, 'days').valueOf()
  }, {
    id: '6',
    description: 'Doorknobs',
    note: '',
    amount: 425001,
    createdAt: moment(0).add(75, 'days').valueOf()
  }];
  const action = setExpenses(newExpenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses: newExpenses
  });
});

test('should fetch the expenses from firebase', () => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});