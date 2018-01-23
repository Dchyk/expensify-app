import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return total amount of all expenses', () => {
  const expectedTotal = 114195; // Test total amount
  const selectedTotal = selectExpensesTotal(expenses);
  expect(selectedTotal).toBe(expectedTotal);
});

test('should return 0 if no expenses', () => {
  expect(selectExpensesTotal([])).toBe(0);
});

test('should correctly add up a single expense', () => {
  const total = expenses[0].amount;
  expect(selectExpensesTotal([expenses[0]])).toBe(total);
});