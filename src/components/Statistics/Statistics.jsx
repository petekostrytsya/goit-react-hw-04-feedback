import PropTypes from 'prop-types';
import { StatsList, StatsItem } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <StatsList>
            <StatsItem>Good: {good}</StatsItem>
            <StatsItem>Neutral: {neutral}</StatsItem>
            <StatsItem>Bad: {bad}</StatsItem>
            <StatsItem>Total: {total}</StatsItem>
            <StatsItem>PositivePercentage: {positivePercentage}%</StatsItem>
        </StatsList>
    )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};