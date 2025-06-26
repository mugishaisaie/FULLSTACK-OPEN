import React from 'react'

const Total = ({parts}) => {
  const totalExercises = parts.reduce((acc,messages)=>acc + messages.exercises, 0)
  return (
          <p>Number of exercises {totalExercises}</p>

  )
}

export default Total
