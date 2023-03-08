
import PropTypes from 'prop-types';
import css from './TransactionHistoryItems.module.css'
export const TransactionHistoryItems =  ({type, amount, currency}) =>
{ return(  
    <tr className = {css.transaction_tr}>
    <td className = {css.transaction_td}>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
    </tr>
)
}

TransactionHistoryItems.propTypes = {
    type: PropTypes.string, 
    amount: PropTypes.string,
     currency:PropTypes.string
}