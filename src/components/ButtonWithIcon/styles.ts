import styled from "styled-components/native";

type ColorButton = "action" | "success";

export const Container = styled.TouchableOpacity<{ color: ColorButton }>`
    width: 100%;
    height: 50px;

    border-radius: 8px;

    flex-direction: row;

    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme[props.color]};
`;

export const Text = styled.Text`
    color: #2E2E2E;
    font-size: 20px;
    font-weight: bold;

    text-transform: uppercase;
    
    margin-left: 4px;
`;