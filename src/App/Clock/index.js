import "./style.css";

const Clock = () => {

    const date = new Date();

    return (
        <header className="clock">
            Dzisiaj jest&nbsp;
            {date.toLocaleString(
                "pl-PL",
                {
                    month: "long",
                    weekday: "long",
                    day: "numeric",
                    year: "numeric"
                },
            )}
            {" r. "}
            godz.&nbsp;
            {date.toLocaleTimeString("pl-PL")}
        </header>
    )
};

export default Clock;
