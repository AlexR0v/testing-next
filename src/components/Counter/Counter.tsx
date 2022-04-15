import { FC, useState } from 'react'

interface CounterProps {
  defaultCount: number
  defaultDescription: string
}

const Counter: FC<CounterProps> = ({ defaultCount, defaultDescription }) => {
  const [count, setCount] = useState<number>(defaultCount)

  return (
    <div>
      <h2>
        Desc: {defaultDescription} - DC: {defaultCount}
      </h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      Current count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter
