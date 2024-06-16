import style from './CryptoHistory.module.css';
import { formatDate } from 'helpers/formatDate';

export const CryptoHistory = ({ transactions }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={transaction.id} className={style.tr}>
            <td className={style.td}>{index + 1}</td>
            <td className={style.td}>{transaction.price}</td>
            <td className={style.td}>{transaction.amount}</td>
            <td className={style.td}>{formatDate(transaction.date)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
