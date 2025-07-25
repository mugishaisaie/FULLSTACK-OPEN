import Content from "./components/Content"
import Counter from "./components/Counter"
import Header from "./components/Header"
import Total from "./components/Total"
import Work1 from "./learning/work1"
import Work2 from "./learning/work2"

const App = () => {
    const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      
      
   <Header course={course}/>
    <Content  parts={parts}/>
   <Total parts={parts}/>
       
      
      
    </div>
  )
}

export default App