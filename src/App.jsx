// import logo from './logo.svg';
import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });

  useEffect(() => {
    return () => clearInterval(id.current);
  }, []);

  let id = useRef();

  function handleTime() {
    id.current = setInterval(() => {
      setTime((prev) => {
        if (prev.sec === 60) {
          return { ...prev, min: prev.min + 1, sec: 0 };
        }
        if (prev.min === 60) {
          return { ...prev, hr: prev.hr + 1, min: 0 };
        }
        return { ...prev, sec: prev.sec + 1 };
      });
    }, 10);
  }
  // setInterval(()=>{
  //   setTime (time+1)

  // }, 1000)
  return (
    <div className="App">
      <div className="appLayout">
        
        <div className="stpwtchLayout">
          <h1>STOPWATCH</h1>
        </div>
        <h1>
          {time.hr.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
          :
          {time.min.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
          :
          {time.sec.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </h1>
        <div className="btnBox">
          <button className="btn" onClick={() => handleTime()}>
            START
          </button>
          <button className="btn" onClick={() => clearInterval(id.current)}>
            PAUSE
          </button>
          <button
            className="btn"
            onClick={() => {
              clearInterval(id.current);
              setTime(0);
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
