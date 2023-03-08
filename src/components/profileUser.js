// const   Profile (props) =>  {   /// стрелочная функц
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
import css from  "./profile.module.css" ;

import defaultimg from './defaultimg.png';
console.log(defaultimg);


export default function Profile (props) {
    const {avatar = defaultimg, username = 'incognito', tag, location, stats } = props;  // деструктуризация
    
    return (<div className = {css.profile} >
     <div  >
      <div  > 
        <img className={css.profile_img}
        src= {avatar} 
        alt="User avatar"
          
     />
     </div>
         <p className = {css.profile_h2} >{username}</p>
         <p  className = {css.profile_p}>{tag}</p>
         <p className = {css.profile_p}>{location}</p>
       </div>
    
       <ul className = {css.profile_stats} >
         <li className = {css.profile_span_block}>
           <span  className = {css.profile_stats_span}  >Followers</span>
           <span  className= {css.profile_stats_value}>{stats.followers}</span>
         </li>
         <li className = {css.profile_span_block}>
           <span className = {css.profile_stats_span}>Views</span>
           <span className= {css.profile_stats_value}>{stats.likes}</span>
         </li>
         <li className = {css.profile_span_block}>
           <span  className = {css.profile_stats_span}>Likes</span>
           <span className= {css.profile_stats_value}>{stats.views}</span>
         </li>
       </ul>
     </div> ); 
      
  };

  Profile.propTypes = {
    avatar:  PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.object
};

// export default Profile ; //     если стрелочная функция