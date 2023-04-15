import "./style.css";

const Clock = () => {

    const date = new Date();

    return (
        <header className="clock">
            Dzisiaj jest {date.toLocaleString("pl-PL",
                { hour: "2-digit", minute: "2-digit", second: "2-digit", month: "long", weekday: "long", day: "numeric", year: "numeric" },
            )}
        </header>
    )
};

export default Clock;
