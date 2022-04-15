import { FC, useState } from 'react'

interface CounterProps {
  defaultCount: number
  defaultDescription: string
}

const Counter: FC<CounterProps> = ({ defaultCount, defaultDescription }) => {
  const [count, setCount] = useState<number>(defaultCount)
  const [incrementor, setIncrementor] = useState(1)

  return (
    <div>
      <h2>
        Desc: {defaultDescription} - DC: {defaultCount}
      </h2>
      <label htmlFor='incrementor'>
        Incrementor:
        <input
          id='incrementor'
          value={incrementor}
          onChange={(e) => {
            setIncrementor(parseInt(e.target.value))
          }}
          type='number'
        />
      </label>
      <button onClick={() => setCount(count - incrementor)}>-</button>
      Current count: {count}
      <button onClick={() => setCount(count + incrementor)}>+</button>
    </div>
  )
}

export default Counter
