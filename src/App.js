import React from 'react'

import './App.css';
import Video from './components/video/Video';

function App() {
  return (
    // BEM nameing convection
    <div className="app">
      {/* App container */}
      <div className="app__videos">
        <Video
          url="https://player.vimeo.com/external/509920885.sd.mp4?s=8d09fe212268d8f52109d7bc76571660234817cb&profile_id=165&oauth2_token_id=57447761"
        />
        <Video
          url="https://player.vimeo.com/external/519590702.sd.mp4?s=50f1932dd77f8d697c7e5c86951ef4567a69f6e0&profile_id=165&oauth2_token_id=57447761"
        />

      </div>
    </div>
  );
}

export default App;
