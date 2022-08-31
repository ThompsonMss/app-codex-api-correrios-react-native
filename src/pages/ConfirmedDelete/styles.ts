import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};

    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    margin-top: 10px;

    font-size: 16px;
    text-align: center;
    color: ${(props) => props.theme.textColorInput};
`;