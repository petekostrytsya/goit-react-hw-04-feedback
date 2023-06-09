import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ButtonList>
        {options.map(({ option }) => (
          <Button name={option} type="button" onClick={onLeaveFeedback}>
            {option}
          </Button>
        ))}
      </ButtonList>
    )
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};