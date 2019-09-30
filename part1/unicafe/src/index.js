import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, bad, neutral}) => {
  let count = good + neutral + bad;
  let total = good-bad;
  if (count === 0) {
    return (
      <div>No feedback given yet</div>
    )
  }
  return (
    <table>
      <tbody>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="all" value={count}/>
        <Statistic text="average" value={count>0 ? (total/count).toFixed(3) : 0}/>
        <Statistic text="positive" value={count>0 ? (good/count*100).toFixed(2).concat(' %') : '0 %'}/>
      </tbody>
    </table>
  )
}

const Statistic = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td> 
  </tr>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = newValue => {
    setGood(newValue)
  }

  const setBadValue = newValue => {
    setBad(newValue)
  }

  const setNeutralValue = newValue => {
    setNeutral(newValue)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGoodValue(good + 1)} text="good"/>
      <Button handleClick={() => setNeutralValue(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBadValue(bad + 1)} text="bad"/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)