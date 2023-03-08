// import {useTable} from 'react-table';
import css from './TransactionHistory.module.css';
import transactions from '../../../src/transactions.json';
// import makeData from './transactions.json'

// import BootstrapTable from 'react-bootstrap-table-next';
// import {TransactionHistoryItems} from 'components/TransactionHistoryItems/TransactionHistoryItems'
import {TransactionHistoryItems} from 'components/TransactionHistoryItems/TransactionHistoryItems'
export const TransactionHistory = (props)  => {
     
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
    {transactions.map(({type, amount, currency}) =>  < TransactionHistoryItems 
    transaction key = {transactions.id} 
    type = {type} 
    amount = {amount} 
    currency = {currency} 
    />)}
       
  </tbody>
</table>






        ///////////////
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>ID</th>
    //         <th>Name</th>
    //         <th>Email</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.map((item) => (
    //         <tr key={item.id}>
    //           <td>{item.id}</td>
    //           <td>{item.name}</td>
    //           <td>{item.email}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    );
  }
  
 
























// // const data = [
// //     {id: 1, name: 'Gob', value: '2'},
// //     {id: 2, name: 'Buster', value: '5'},
// //     {id: 3, name: 'George Michael', value: '4'}
// //   ];
//   const columns = [{
//     dataField: 'id',
//     text: 'Product ID'
//   }, {
//     dataField: 'name',
//     text: 'Product Name'
//   }, {
//     dataField: 'value',
//     text: 'Product value'
//   }];

//   console.dir(columns);

//   class App extends Component {
//     render() {
//       return (
//         <div className="App">
//           <p className="Table-header">Basic Table</p>
          
//           <BootstrapTable keyField='id' data={ person } columns={ columns } />
//         </div>
//       );
//     }
//   }








// const Styles = styled.div`
//   padding: 1rem;

//   table {
//     border-spacing: 0;
//     border: 1px solid black;

//     tr {
//       :last-child {
//         td {
//           border-bottom: 0;
//         }
//       }
//     }

//     th,
//     td {
//       margin: 0;
//       padding: 0.5rem;
//       border-bottom: 1px solid black;
//       border-right: 1px solid black;

//       :last-child {
//         border-right: 0;
//       }
//     }
//   }









// function Table({ columns, data }) {
//     // Use the state and functions returned from useTable to build your UI
//     const {
//       getTableProps,
//       getTableBodyProps,
//       headerGroups,
//       rows,
//       prepareRow,
//     } = useTable({
//       columns,
//       data,
//     })
  
//     // Render the UI for your table
//     return (
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row, i) => {
//             prepareRow(row)
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => {
//                   return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                 })}
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     )
//   }

  
// function App() {
//     const columns = React.useMemo(
//       () => [
//         {
//           Header: 'Name',
//           columns: [
//             {
//               Header: 'First Name',
//               accessor: 'firstName',
//             },
//             {
//               Header: 'Last Name',
//               accessor: 'lastName',
//             },
//           ],
//         },
//         {
//           Header: 'Info',
//           columns: [
//             {
//               Header: 'Age',
//               accessor: 'age',
//             },
//             {
//               Header: 'Visits',
//               accessor: 'visits',
//             },
//             {
//               Header: 'Status',
//               accessor: 'status',
//             },
//             {
//               Header: 'Profile Progress',
//               accessor: 'progress',
//             },
//           ],
//         },
//       ],
//       []
//     )
  


//     const data = React.useMemo(() => makeData(20), [])
  
//     return (
//       <Styles>
//         <Table columns={columns} data={data} />
//       </Styles>
//     )
//   }
//   export default App












// const TransactionHistory = ({Type, Amount, Currency }) =>{
//     return 
//     <table className={css.transaction_history}>
//   <thead className={css.transaction_tablehead}>
//     <tr>
//       <th>{Type}</th>
//       <th>{Amount}</th>
//       <th>{Currency}</th>
//     </tr>
//   </thead>
//   </table>
// }


