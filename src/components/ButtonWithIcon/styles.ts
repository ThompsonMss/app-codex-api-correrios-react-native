import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;

    border-radius: 8px;

    flex-direction: row;

    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme.action};
`;

export const Text = styled.Text`
    color: #2E2E2E;
    font-size: 20px;
    font-weight: bold;

    text-transform: uppercase;
    
    margin-left: 4px;
`;