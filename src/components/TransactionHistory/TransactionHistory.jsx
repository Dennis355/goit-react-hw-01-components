// import {useTable} from 'react-table';
import css from './TransactionHistory.module.css';
import transactions from '../../../src/data/transactions.json';
// import makeData from './transactions.json'

import { TransactionHistoryItems } from 'components/TransactionHistory/TransactionHistoryItems/TransactionHistoryItems';
export const TransactionHistory = props => {
  return (
    <table className={css.transaction_history}>
      <thead className={css.transaction_tablehead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ type, amount, currency }) => (
          <TransactionHistoryItems
            transaction
            key={transactions.id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>

  );
};
