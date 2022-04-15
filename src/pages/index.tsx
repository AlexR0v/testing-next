import type { NextPage } from 'next'
import Counter from '../components/Counter/Counter'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Counter defaultCount={0} defaultDescription='counter' />
    </div>
  )
}

export default Home
