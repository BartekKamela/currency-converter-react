import styled from "styled-components";

export const StyledForm = styled.form`
    max-width: 350px;
    margin: 5px auto;
`;

export const FormFieldset = styled.fieldset`
    text-align: center;
    border-width: 0px;
    border-radius: 10px;
    box-shadow: 0px 0px 50px 20px #000000;
    background: linear-gradient(to right, #e4e4e4f7, #ebebebe8);
`;

export const FormLegend = styled.legend`
    font-family: 'Lato', sans-serif;
    padding: 3px 20px;
    margin: 0 auto;
    border: solid;
    border-width: 1px;
    border-radius: 6px;
    color: ${({ theme })=> theme.color.white};
    font-weight: bold;
    letter-spacing: 1.5px;
    background-color: ${({ theme })=> theme.color.black};
    box-shadow: 0px 0px 19px #8080808a;
`;

export const Amount = styled.p`
    font-style: italic;
    text-align: left;
    padding-bottom: 10px;
    margin-left: 10px;
`;

export const Label = styled.label`
    padding-left: 5px;
    margin-right: 10px;
`;

export const Input = styled.input`
    width: 200px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme })=> theme.color.white};
    text-align: left;
    box-shadow: 0px 0px 3px grey;
    padding-left: 10px;
`;

export const Fieldset = styled.fieldset`
    padding: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: solid;
    border-width: 0px;
    margin-bottom: 30px;
    border-radius: 6px;
    background-color: #ffffff50;
    box-shadow: 0px 0px 3px grey;
`;

export const Legend = styled.legend`
    text-align: left;
    margin-left: 15px;
    text-shadow: 0 0 3px #ffffff, 0 0 5px #ffffff;
`;

export const CurrencyIn = styled.label`
    margin-left: 10px;
    margin-right: 20px;
`;

export const CurrencyOut = styled.label`
    margin-left: 10px;
    padding: 10px;
`;

export const Select = styled.select`
    margin-left: 5px;
    border: solid;
    border-width: 0px;
    border-radius: 5px;
    box-shadow: 0px 0px 3px #808080;
    background-color: ${({ theme })=> theme.color.white};
`;

export const Button = styled.button`
    color: ${({ theme })=> theme.color.black};
    cursor: pointer;
    border-width: 0px;
    border-radius: 15px;
    background-color: ${({ theme })=> theme.color.mercury};
    outline: 1px solid #0000007d;
    transition: 0.5s;

    &:hover {
        color: ${({ theme })=> theme.color.black};
        cursor: pointer;
        background-color: ${({ theme })=> theme.color.white};
        box-shadow: 0px 0px 15px #0000005e;
        outline: 1px solid #0000007d;
        transition: 0.5s;
    }

    &:active {
        cursor: pointer;
        color: ${({ theme })=> theme.color.white};
        background-color: ${({ theme })=> theme.color.black};
    }
`;

export const ButtonCount = styled.button`
    padding: 3px 30px;
    color: ${({ theme })=> theme.color.black};
    cursor: pointer;
    border-width: 0px;
    border-radius: 15px;
    background-color: ${({ theme })=> theme.color.mercury};
    outline: 1px solid #0000007d;
    transition: 0.5s;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme })=> theme.color.white};
        box-shadow: 0px 0px 15px #0000005e;
        outline: 1px solid #0000007d;
        transition: 0.5s;
    }

    &:active {
        cursor: pointer;
        color: ${({ theme })=> theme.color.white};
        background-color: ${({ theme })=> theme.color.black};
    }
`;

export const Wrapper = styled.p`
    font-size: x-small;
`;

export const Loading = styled.div`
	text-align: center;
	margin-bottom: 20px;
`;

export const Loader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
`;

export const Fail = styled.div`
	text-align: center;
	margin-bottom: 40px;
	color: ${({ theme }) => theme.colors.red};
`;
