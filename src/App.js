import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import Video from './components/video/Video';

function App() {


  const [date, setDate] = useState([]);

  const loadVideo = () => {
    axios.get('https://tiktok-menr.herokuapp.com/v1/posts')
      .then(res => {
        setDate(res.data)

        test();
      })
  }

  const test = () => {
    date.map(item => (
      console.log(item.url)
    ))
  }

  useEffect(() => {
    loadVideo();
  }, [])

  return (
    // BEM nameing convection
    <div className="app">
      {/* App container */}
      <div className="app__videos">
        {date.map(item => (
          <Video
            key={item.url}
            channel={item.channel}
            description={item.description}
            song={item.song}
            likes={item.likes}
            share={item.share}
            chat={item.chat}
            url={item.url}
          />
        ))}

      </div>
    </div>
  );
}

export default App;
