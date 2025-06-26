import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>

      <div>
        <h2>Give Feedback</h2>
        <button onClick={()=>setGood(good=>good + 1)}>good</button>
        <button onClick={()=>setNeutral(neutral=>neutral + 1)}>neutral</button>
        <button onClick={()=>setBad(bad=>bad +1)}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Statistics = ({good,neutral,bad})=>{

  const total = good + neutral + bad;
  const average = (good - bad) / total; // Avoid division by zero
  const positive = (good / total) * 100 ; // Avoid division by zero

  if(!total){
    return(
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <div>
       <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={total} />
       <StatisticLine text="Average" value ={average.toFixed(2)} />
      <StatisticLine text="Positive" value ={positive.toFixed(2)} /> 
    </div>
  )
}

const StatisticLine = ({text, value}) => {

  return(
    <div>
      {text} {value}
    </div>
  )
}
export default App