 import { StyledResult } from "./styled"

const Result = ({ result }) => (
    <StyledResult>
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
    </StyledResult>
);

export default Result;