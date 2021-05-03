import Head from 'next/head'
import { Header } from '../components/Header'
import { Section } from '../components/Section';

import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Parallax Scrolling | Home</title>
      </Head>

      <Header />
      <Section />

      <div className={styles.sec} id="sec">
        <h2>Parallax Scrolling Effects</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente
          quas quam natus quos libero unde, illo quis sunt eos! Odio corporis repellendus 
          ab quasi ut delectus in, minus veniam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente
          quas quam natus quos libero unde, illo quis sunt eos! Odio corporis repellendus 
          ab quasi ut delectus in, minus veniam? 
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente
          quas quam natus quos libero unde, illo quis sunt eos! Odio corporis repellendus 
          ab quasi ut delectus in, minus veniam? <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente
          quas quam natus quos libero unde, illo quis sunt eos! Odio corporis repellendus 
          ab quasi ut delectus in, minus veniam?<br />        
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente
          quas quam natus quos libero unde, illo quis sunt eos! Odio corporis repellendus 
          ab quasi ut delectus in, minus veniam? <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente
          quas quam natus quos libero unde, illo quis sunt eos! Odio corporis repellendus 
          ab quasi ut delectus in, minus veniam? <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente
          quas quam natus quos libero unde, illo quis sunt eos! Odio corporis repellendus 
          ab quasi ut delectus in, minus veniam? <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente
          quas quam natus quos libero unde, illo quis sunt eos! Odio corporis repellendus 
          ab quasi ut delectus in, minus veniam? <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente
          quas quam natus quos libero unde, illo quis sunt eos! Odio corporis repellendus 
          ab quasi ut delectus in, minus veniam? <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente
          quas quam natus quos libero unde, illo quis sunt eos! Odio corporis repellendus 
          ab quasi ut delectus in, minus veniam?
        </p>
      </div>
    </div>
  )
}
