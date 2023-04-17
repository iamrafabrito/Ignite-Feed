import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar>
          sidebar
        </Sidebar>
        <main>
          <Post 
            author="John Doe"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Post
            author="Jane Doe"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </main>
      </div>
    </>
  )
}
