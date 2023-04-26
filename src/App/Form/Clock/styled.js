import styled from "styled-components";

export const StyledClock = styled.div`
    margin-top: 15px;
    margin-bottom: 20px;
    margin-right: 5px;
    font-family: ${({ theme }) => theme.font.monospace};
    font-size: xx-small;
    text-align: right;
    color: ${({ theme }) => theme.color.black};
`;