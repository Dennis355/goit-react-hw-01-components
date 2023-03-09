import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem/FriendListItem';
import css from './FriendList.module.css';
import { arrayOf } from 'prop-types';
export const FriendsList = ({ friends }) => {
  // console.log(friends);
  return (
    <ul className={css.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
