import { useState, useEffect } from 'react';
import { Div } from "./styled";

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

    const formattedDate = date.toLocaleString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    })

    return (
        <Div>
            Dzisiaj jest {formattedDate}
        </Div>
    )
};

export default Clock;
