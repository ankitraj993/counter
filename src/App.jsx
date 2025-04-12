import { useState, useRef } from 'react';
import './App.css'; // Add this import

function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  const intervalRef = useRef(null);
  const isRunning = useRef(false);

  const handleStart = () => {
    if (isRunning.current) return; // Prevent multiple intervals
    setRunning(true);
    isRunning.current = true;
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const handleStop = () => {
    isRunning.current = false;
    setRunning(false);
    // Clear the interval only if it exists
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleReset = () => {
    isRunning.current = false;
    setRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCount(0);
  };

  return (
    <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
      <div className='card text-center shadow p-5'>
        <h1 className='fs-2'>Counter</h1>
        <h2 className='fs-1'>{count}</h2>

        <div className='d-flex justify-content-center gap-3'>
          <button
            type='button'
            className='btn btn-outline-light counter-btn bg-black text-white d-flex align-items-center'
            disabled={running}
            onClick={handleStart}
          >
            <svg
              width='20px'
              height='20px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g id='SVGRepo_tracerCarrier' strokeLinejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <path
                  d='M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z'
                  stroke='#fff'
                  strokeWidth='2'
                  strokeLinejoin='round'
                ></path>{' '}
              </g>
            </svg>
            <span className='ms-2'>Start</span>
          </button>
          <button
            type='button'
            className='btn btn-light counter-btn d-flex align-items-center border'
            disabled={!running}
            onClick={handleStop}
          >
            <svg
              width='16px'
              height='16px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g id='SVGRepo_tracerCarrier' strokeLinejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <path
                  d='M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z'
                  stroke='#1C274C'
                  strokeWidth='1.5'
                ></path>{' '}
                <path
                  d='M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z'
                  stroke='#1C274C'
                  strokeWidth='1.5'
                ></path>{' '}
              </g>
            </svg>
            <span className='ms-2'>Stop</span>
          </button>
          <button
            type='button'
            className='btn btn-light counter-btn d-flex align-items-center border'
            onClick={handleReset}
          >
            <svg
              width='16px'
              height='16px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'

                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <g clipPath='url(#clip0_429_11071)'>
                  {' '}
                  <path
                    d='M12 2.99982C16.9706 2.99982 21 7.02925 21 11.9998C21 16.9704 16.9706 20.9998 12 20.9998C7.02944 20.9998 3 16.9704 3 11.9998C3 9.17255 4.30367 6.64977 6.34267 4.99982'
                    stroke='#292929'
                    strokeWidth='2.5'

                    strokeLinejoin='round'
                  ></path>{' '}
                  <path
                    d='M3 4.49982H7V8.49982'
                    stroke='#292929'
                    strokeWidth='2.5'

                    strokeLinejoin='round'
                  ></path>{' '}
                </g>{' '}
                <defs>
                  {' '}
                  <clipPath id='clip0_429_11071'>
                    {' '}
                    <rect width='24' height='24' fill='white'></rect>{' '}
                  </clipPath>{' '}
                </defs>{' '}
              </g>
            </svg>
            <span className='ms-2'>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
