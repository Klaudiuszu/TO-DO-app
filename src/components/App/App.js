import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import stylesImg from '../Hero/Hero.scss';
class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>A simple to-do app, with lists, columns and cards</h2>
          <List title={['Things to do ', 
          <sup>soon!</sup>,
          <img className={styles.stylesImg} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"></img> ]}>
        <p>I'm planning on doing all these things sooner, rather than later!</p>
          </List>
      </main>
      
    )
  }
}

export default App;

