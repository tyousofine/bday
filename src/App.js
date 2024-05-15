
import Confetti from 'react-confetti'
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='balloons'></div>
      <Confetti
        width={window.width}
        height={window.height}
      />
      <h1 className='wiggle'>Happy Birthday Will!</h1>
      <video className='vid'
        src="vid.mp4"
        loop
        autoPlay
        muted
        controls
      >test</video>
    </div >
  );
}

export default App;
