import React from 'react'

function Course({courses}) {
  return (
    <div>
     {courses.map((course)=>(
      <div key={course.id}>
        <h2>{course.name}</h2>
        <ul>
         {course.parts.map((part)=><li key={part.id}>{part.name}</li>)}
        </ul>

        <p> <strong>Total Exercises {course.parts.reduce((sum,part)=> sum + part.exercises ,0)}</strong></p>
      </div>
     ))}

      {/* {course.parts.map((part)=><p key={part.id}>{part.name} {part.exercises}</p>)} */}
    </div>
  )
}

export default Course
