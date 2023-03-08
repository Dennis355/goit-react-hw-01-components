import PropTypes from 'prop-types';
// <section class="statistics">
//   <h2 class="title">Upload stats</h2>

//   <ul class="stat-list">
//     <li class="item">
//       <span class="label">.docx</span>
//       <span class="percentage">4%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp3</span>
//       <span class="percentage">14%</span>
//     </li>
//     <li class="item">
//       <span class="label">.pdf</span>
//       <span class="percentage">41%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp4</span>
//       <span class="percentage">12%</span>
//     </li>
//   </ul>
// </section>
import css from  "./statistics.module.css" ;
export default function Statistics (props) {

    const { label,  percentage } = props;
return (<section className = {css.statistics}>
{/* <h2 className={css.title}>{title}</h2> */}

<ul className={css.stat_list}>
  <li className={css.item}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}</span>
  </li>
  
</ul>
</section>);
}

Statistics.propTypes = {
  label:  PropTypes.string,
  percentage: PropTypes.number,
  
};