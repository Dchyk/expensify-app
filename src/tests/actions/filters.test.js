import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should genearate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate a text filter action object', () => {
  const action = setTextFilter('some test text');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'some test text'
  })
});

test('should set generate text filter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate an action object to set sortBy to date', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'})
});

test('should generate an action object to set sortBy to amount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'})
});