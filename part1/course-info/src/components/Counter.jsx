import React from 'react'

function Counter() {
    const [count, setCount] = React.useState(0)

    setTimeout(() => {
        setCount(count =>count + 1)
        console.log('Count:', count + 1);
        
    }, 1000);
  return (
    <div>
      <h3>{count}</h3>
    </div>
  )
}

export default Counter
