import './style.css';
const Result = ({ result }) => (
    <p className="form__result">
        Kwota po przeliczeniu: <br />
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;{result.sourceCurrency}&nbsp;=
                {" "}
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.targetCurrency}
                </strong>
            </>
        )}
    </p>
);

export default Result;