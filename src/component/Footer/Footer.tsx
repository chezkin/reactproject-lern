import React, { useState, useEffect } from 'react';
import './Footer.css';

function Footer() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    const formattedTime = `${currentTime.getHours()}:${padZero(currentTime.getMinutes())}:${padZero(currentTime.getSeconds())}`;
    return (
        <footer className="footer">
            <h2>chezkin</h2>
            <h2>{formattedTime}</h2>
        </footer>
    );
}
function padZero(number:number) {
    return number.toString().padStart(2, '0');
}
export default Footer