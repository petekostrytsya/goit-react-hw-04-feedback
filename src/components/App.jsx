import { useState } from 'react';
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { NotFeedback } from "./NotFeedback/NotFeedback";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        console.log(`Type feedback name - ${name} is not`);
    }
  };

  const countTotalFeedback = obj => {
    return Object.values(obj).reduce((total, curr) => (total += curr));
  };

  const countPositiveFeedbackPercentage = totalFeedback => {
    if (totalFeedback > 0) return Math.round((good / totalFeedback) * 100);
    return 0;
  };
  
  const totalFeedback = countTotalFeedback({ good, neutral, bad });
  const positivePercentage = countPositiveFeedbackPercentage(totalFeedback);
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <NotFeedback message="There is no feedback" />
        )}
      </Section>
    </>
  );
};



