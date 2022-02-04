import { useState } from 'react';
import { Tweet } from './components/Tweet';
import { AppRoutes } from './Router';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './Store';

function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ]);

  //const [count, setCount] = useState(0)

  function createTweet() {
    console.log('Creating tweet');
    setTweets([...tweets, 'Tweet 5'])
  }

  return (
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
      // <div>
      //   {
      //     tweets.map(tweet => {
      //       return <Tweet text={tweet} />
      //     })
      //   }

      //   <button
      //     onClick={createTweet}
      //     style={{
      //       backgroundColor: '#f0d5e1',
      //       border: 0,
      //       padding: '6px 12px'
      //     }}
      //     >
      //       Add tweet
      //     </button>
      // </div>
  )
}

export default App
