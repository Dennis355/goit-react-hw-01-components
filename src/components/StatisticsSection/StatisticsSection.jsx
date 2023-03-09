import css from './StatisticsSection.module.css';
import dat from '../../data/data.json';
// import dat from '.../data.json'

export default function StatisticsSection() {
  return (
    <section className={css.statistics}>
      {
        <ul className={css.stat_list}>
          {dat.map(dat => (
            <li id={dat.id} className={css.item}>
              <span className={css.label}>{dat.label}</span>
              <span className={css.percentage}>{dat.percentage}</span>{' '}
            </li>
          ))}{' '}
        </ul>
      }
    </section>
  );
}
