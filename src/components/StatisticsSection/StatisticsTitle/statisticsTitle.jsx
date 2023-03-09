import PropTypes from 'prop-types';
import css from './statisticsTitle.module.css';
export default function StatisticsTitle({ text }) {
  return <h2 className={css.title}>{text}</h2>;
}
StatisticsTitle.propTypes = {
  text: PropTypes.string,
};
