import { useState, useEffect } from 'react';
import "./style.css";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);


    return (
        <div className="clock">
            Dzisiaj jest&nbsp;
            {date.toLocaleString(
                "pl-PL",
                {
                    month: "long",
                    weekday: "long",
                    day: "numeric",
                },
            )}
            {", "}
            {date.toLocaleTimeString("pl-PL")}
        </div>
    )
};

export default Clock;
