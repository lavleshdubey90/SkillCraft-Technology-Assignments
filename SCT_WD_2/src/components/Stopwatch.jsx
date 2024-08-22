import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0); // Time in milliseconds
    const [running, setRunning] = useState(false);
    const [laps, setLaps] = useState([]);

    // Format time to `hh:mm:ss:ms` format
    const formatTime = (ms) => {
        const hours = Math.floor(ms / 3600000);
        const minutes = Math.floor((ms % 3600000) / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const milliseconds = Math.floor(ms % 1000 / 10);

        return {
            hours: String(hours).padStart(2, '0'),
            minutes: String(minutes).padStart(2, '0'),
            seconds: String(seconds).padStart(2, '0'),
            milliseconds: String(milliseconds).padStart(2, '0'),
        };
    };

    useEffect(() => {
        let id;

        if (running) {
            id = setInterval(() => {
                setTime(prevTime => prevTime + 10); // Update time every 10ms
            }, 10);
        }

        return () => {
            clearInterval(id);
        };
    }, [running]);

    const start = () => setRunning(true);
    const stop = () => setRunning(false);
    const reset = () => {
        setRunning(false);
        setTime(0);
        setLaps([]);
    };

    const addLap = () => {
        setLaps([...laps, formatTime(time)]);
    };

    const { hours, minutes, seconds, milliseconds } = formatTime(time);

    return (
        <div className='pt-40 max-w-screen-sm mx-auto'>
            <div className='p-5 text-center mx-auto'>
                <h1 className='text-3xl sm:text-5xl flex items-center mx-auto w-80 sm:w-[380px]'>
                    <span className='p-2'>{hours}</span> {/* Hour */}
                    <span className='p-2'>:</span>
                    <span className='p-2'>{minutes}</span> {/* Minutes */}
                    <span className='p-2'>:</span>
                    <span className='p-2'>{seconds}</span> {/* Seconds */}
                    <span className='p-2'>:</span>
                    <span className='p-2'>{milliseconds}</span> {/* Milliseconds */}
                </h1>

                <div className="controllers mt-20 mx-auto w-80 flex text-center justify-center md:gap-x-4">
                    <button className='btn' onClick={start}>{running ? "Start" : "Resume"}</button>
                    <button className='btn' onClick={stop}>Stop</button>
                    <button className='btn' onClick={reset}>Reset</button>
                    <button className='btn' onClick={addLap}>Lap</button>
                </div>

                <div className='max-w-96 mx-auto h-40 mt-10 p-2 overflow-y-auto'>
                    <h2 className='text-xl font-semibold'>Laps:</h2>
                    <ul>
                        {laps.map((lap, index) => (
                            <li key={index} className='py-1'>
                                Lap {index + 1}: {lap.hours}:{lap.minutes}:{lap.seconds}:{lap.milliseconds}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Stopwatch;
