import { useState } from "react"

 const Work1 = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1;
    setLeft(updatedLeft)

    setTotal(updatedLeft + right)
    console.log(allClicks)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight =right + 1
    setRight(updatedRight)

    setTotal(left + updatedRight)
    console.log(allClicks)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>

      <p>total {total}</p>
    </div>
  )
}

export default Work1;