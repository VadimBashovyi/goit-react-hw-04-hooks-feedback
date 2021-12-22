import { useState } from 'react'
import './App.css'
import Section from './components/Section'
import Statistics from './components/Statistics'
import FeedbackOptions from './components/Feedback'
import Notification from './components/Notification'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const options = { good, neutral, bad }

  const onLeaveFeedback = (e) => {
    // console.log(e.target)
    // const sumFeedback = e.target

    switch (e) {
      case 'good':
        setGood((prevState) => prevState + 1)
        break
      case 'neutral':
        setNeutral((prevState) => prevState + 1)
        break
      case 'bad':
        setBad((prevState) => prevState + 1)
        break

      default:
        return
    }
  }
  const countTotalFeedback = () => {
    const total = [good, neutral, bad]
    return total.reduce((acc, value) => (acc += value), 0)
  }

  const positivePercentage = () => {
    return Math.round((good * 100) / countTotalFeedback()) + '%'
  }
  const sumTotal = good + neutral + bad

  return (
    <div>
      <Section title="Please leave Feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <div>
        {sumTotal ? (
          <Section title="Statistic">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={positivePercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback" />
        )}
      </div>
    </div>
  )
}

export default App
