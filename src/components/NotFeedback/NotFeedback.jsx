import PropTypes from 'prop-types';

import { NotFeedbackMessege } from './NotFeedback.styled';

export const NotFeedback = ({ message }) => (
  <NotFeedbackMessege>{message}</NotFeedbackMessege>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};