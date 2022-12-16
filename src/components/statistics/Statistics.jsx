import styles from '../statistics/Statistics.module.css';

export const Statistics = ({
  good,
  bad,
  neutral,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <ul className={styles.statistics_list}>
      <h2 className={styles.statistics}>Statistics</h2>
      <li>
        Good: <span>{good}</span>
      </li>
      <li>
        Neutral: <span>{neutral}</span>
      </li>
      <li className={styles.bad}>
        Bad: <span>{bad}</span>
      </li>
      <li>
        Total: <span>{countTotalFeedback()}</span>
      </li>
      <li>
        Positive feedback: <span>{Math.round(countPositiveFeedbackPercentage())}%</span>
      </li>
    </ul>
  );
};
