// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
// import Statistics from './statistics';
// import React, { Component } from 'react';
// import BootstrapTable from 'react-bootstrap-table-next';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { FriendsList } from './FriendList/FriendList';
import Separation from './Separation/Separation';
import React from 'react';

import StatisticsSection from 'components/StatisticsSection/StatisticsSection';
import StatisticsTitle from 'components/StatisticsSection/StatisticsTitle/statisticsTitle';

import Profile from './profileUser';
import data from '../data/user.json';
// import dat from 'data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
console.log(transactions);

export default function App() {
  return (
    <div>
      <React.StrictMode>
        <Profile
          username={data.username}
          tag={data.tag}
          location={data.location}
          avatar={data.avatar}
          stats={data.stats}
        />
        <Separation />

        <StatisticsTitle text="Upload stats" />
        <StatisticsSection />
        <Separation />
        <FriendsList friends={friends} />
        <Separation />

        <TransactionHistory items={transactions} />
      </React.StrictMode>
    </div>
  );
}
