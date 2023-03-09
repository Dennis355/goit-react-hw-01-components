import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import clsx from 'clsx';
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li className={css.friend_item}>
            <span
                className={clsx(
                    css.friend_status,
                    !isOnline && css.friend_offline,
                )}
            >
                {isOnline}
            </span>
            <img
                className={css.friend_avatar}
                src={avatar}
                alt={name}
                width="48"
            />
            <p className={css.friend_name}> {name}</p>
        </li>
    );
};
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};
