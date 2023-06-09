import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { NotFeedback } from "./NotFeedback/NotFeedback";



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, curr) => (total += curr));
  };

  countPositiveFeedbackPercentage = totalFeedback => {
    const { good } = this.state;

    if (totalFeedback > 0) return Math.round((good / totalFeedback) * 100);
    return 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedback = this.countTotalFeedback();
    const positivePercentage =
      this.countPositiveFeedbackPercentage(totalFeedback);

    return (
      <>
<Section title="Please leave feedback">
  <FeedbackOptions
    options={[
      { option: 'good' },
      { option: 'neutral' },
      { option: 'bad' }
    ]}
    onLeaveFeedback={this.onLeaveFeedback}
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
  }
}
  



