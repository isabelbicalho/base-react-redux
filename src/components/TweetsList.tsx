import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function TweetsList() {
  const tweets = useSelector(state => state.data);
  const dispatch = useDispatch();

  function createTweet() {
    console.log('Creating tweet');
    dispatch({type: 'ADD_TWEET', text: 'Hello!'})
  }
  
  return (
    <div>
     <button
       onClick={createTweet}
       style={{
         backgroundColor: '#f0d5e1',
         border: 0,
         padding: '6px 12px'
       }}
       >
         Add tweet
       </button>
    <ul>
      {tweets.map(tweet => <li key={tweet}>{tweet}</li>)}
    </ul>
    </div>
  );
}
