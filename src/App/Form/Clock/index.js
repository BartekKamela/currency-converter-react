import { useCurrentDate } from './useCurrentDate';
import { Div } from "./styled";

const formattedDate = (date) =>
    date.toLocaleString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    });

const Clock = () => {
    const date = useCurrentDate();

    return (
        <Div>
            Dzisiaj jest {formattedDate(date)}
        </Div>
    )
};

export default Clock;
