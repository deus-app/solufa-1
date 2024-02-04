import type { TweetEntity } from 'api/@types';
import { userAtom } from 'atoms/user';
import { useAtom } from 'jotai';
import { useCallback, useEffect, useState } from 'react';
import { apiClient } from 'utils/apiClient';
import { returnNull } from 'utils/returnNull';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [tweets, setTweets] = useState<TweetEntity[]>([]);
  const [newTweet, setNewTweet] = useState<string>('');

  const fetchTweets = useCallback(async () => {
    const fetchedTweets = await apiClient.public.timeline.$get().catch(returnNull);
    if (fetchedTweets) setTweets(fetchedTweets);
  }, []);

  const postTweet = async () => {
    if (newTweet.length === 0 || newTweet.length > 140) return;
    await apiClient.private.tweets.$post({ body: { text: newTweet } }).catch(returnNull);
    setNewTweet('');
    await fetchTweets();
  };

  useEffect(() => {
    fetchTweets();
    const intervalId = setInterval(fetchTweets, 5000);
    return () => clearInterval(intervalId);
  }, [fetchTweets]);

  return (
    <div className={styles.container}>
      <div className={styles.tweetBox}>
        <textarea
          className={styles.tweetInput}
          placeholder="What's happening?"
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
        />
        <button className={styles.tweetButton} onClick={postTweet} disabled={newTweet.length === 0 || newTweet.length > 140}>
          Tweet
        </button>
      </div>
      <ul className={styles.timeline}>
        {tweets.map((tweet) => (
          <li key={tweet.id} className={styles.tweet}>
            <p>{tweet.text}</p>
            <div className={styles.tweetInfo}>
              <span>by {tweet.userId}</span>
              <span>{new Date(tweet.createdAt).toLocaleString()}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
