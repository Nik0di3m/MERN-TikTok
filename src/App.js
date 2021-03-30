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
          channel="Nikodex"
          description="Yummy naleśnik with miód"
          song="LOAT! - Villin!"
          likes="165873"
          share="587"
          chat="201"
          url="https://player.vimeo.com/external/509920885.sd.mp4?s=8d09fe212268d8f52109d7bc76571660234817cb&profile_id=165&oauth2_token_id=57447761"
        />
        <Video
          channel="AMG G-KLASA"
          description="ON ROAD TO THE SUN"
          song="Travis Scott - goosebumps ft. Kendrick Lamar"
          likes="69354"
          share="841"
          chat="564"
          url="https://player.vimeo.com/external/519590702.sd.mp4?s=50f1932dd77f8d697c7e5c86951ef4567a69f6e0&profile_id=165&oauth2_token_id=57447761"
        />
        <Video
          channel="QUICK TIPS"
          description="BEAUTYFULL DESK ❤❤"
          song="ROSÉ - 'On The Ground' M/V"
          likes="54721"
          share="648"
          chat="106"
          url="https://player.vimeo.com/external/504982866.sd.mp4?s=deb2c32045823942180c92628a9b5b5ebab16939&profile_id=165&oauth2_token_id=57447761"
        />
      </div>
    </div>
  );
}

export default App;
