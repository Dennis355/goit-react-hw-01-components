import css from './StatisticsItem.module.css';
export default function StatisticsItem({ dat }) {
  return (
    <li id={dat.id} className={css.item}>
      <span className={css.label}>{dat.label}</span>
      <span className={css.percentage}>{dat.percentage}</span>
    </li>
  );
}
