import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';   // import 
import './index.css';
// import fr from 'friends.json'

// const jsondb = require('friends.json');
// console.log(jsondb);

// console.log(fr);

// const isOnline = fr.isOnline;
// // const color = jsondb.map(jsondb => )
// // console.log(isOnline);
// // находим кнопку на странице
// const button = document.querySelector('.online-button');

// // определяем цвет в зависимости от параметра isOnline
// const color = isOnline ? 'green' : 'red';

// // задаем цвет кнопки
// // button.style.backgroundColor = color;





// FriendListItem_friend_status__gfyuB


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// const root = ReactDOM.createRoot(
//   document.getElementById('root'));

// const Product = props => (
//   <div>
//     <img
//       src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       alt="Tacos With Lime"
//       width="640"
//     />
//     <h2>Tacos With Lime</h2>
//     <p>Price: 10.99$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );
// console.log(Product);
// ReactDOM.createRoot(document.getElementById("root")).render(Product);

// import ReactDOM from "react-dom/client";
// const imageUrl =
//   "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
// const productPrice = 10.99;
// const product = (
//   <div>
//     <img src={imageUrl} alt="Tacos With Lime" width="640" />
//     <h2>Tacos With Lime</h2>
//     <p>Price: {productPrice}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// const profileUser_1 = <div> Helloy world </div>;

// const dataUser = {
//   "username": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// }


// import dataUser from './user.json';

// // src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"   /// default src 

// const profileUser = ( 
// <div >
//   <div >
//     <img
//       src= {dataUser.avatar} 
//       alt="User avatar"
      
//     />
//     <p >{dataUser.username}</p>
//     <p >{dataUser.tag}</p>
//     <p >{dataUser.location}</p>
//   </div>

//   <ul >
//     <li>
//       <span >Followers</span>
//       <span >{dataUser.stats.followers}</span>
//     </li>
//     <li>
//       <span >Views</span>
//       <span >{dataUser.stats.likes}</span>
//     </li>
//     <li>
//       <span >Likes</span>
//       <span >{dataUser.stats.views}</span>
//     </li>
//   </ul>
// </div> );


// function Profile(props) {
//   const {avatar, username, tag, location, stats } = props;  // деструктуризация
//   console.log(props);
//   return (<div >
//    <div >
//       <img
//       src= {avatar} 
//       alt="User avatar"
        
//    />
//        <p >{username}</p>
//        <p >{tag}</p>
//        <p >{location}</p>
//      </div>
  
//      <ul >
//        <li>
//          <span >Followers</span>
//          <span >{stats.followers}</span>
//        </li>
//        <li>
//          <span >Views</span>
//          <span >{stats.likes}</span>
//        </li>
//        <li>
//          <span >Likes</span>
//          <span >{stats.views}</span>
//        </li>
//      </ul>
//    </div> ); 
    
// };


// ReactDOM.render(<App/>, document.querySelector('#root'));
// ReactDOM.render(<Profile username = {dataUser.username} 
//   tag = {dataUser.tag} location = {dataUser.location} avatar = {dataUser.avatar}
//   stats = {dataUser.stats} />,
//  document.querySelector('#root'));
// ReactDOM.createRoot(document.getElementById("root")).render(ProfileUser);  /// рендер 1 карточки
// ReactDOM.createRoot(document.getElementById("root")).render(<App/>);  /// рендер 1 карточки
//  ReactDOM.createRoot(document.getElementById("root")).render(<Profile username = {dataUser.username} 
//   tag = {dataUser.tag} location = {dataUser.location} avatar = {dataUser.avatar}
//   stats = {dataUser.stats} />);
  ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
  // ReactDOM.createRoot(document.getElementById("statistic")).render(<App/>);