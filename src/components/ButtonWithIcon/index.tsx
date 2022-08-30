import { CheckCircle, Trash } from "phosphor-react-native";
import { Container, Text } from "./styles";

type TypeIcon = "trash" | "success";
type ColorButton = "action" | "success";

interface InterfaceButtonWithIcon {
    icon: TypeIcon;
    label: string;
    onPress: (...args: any) => any;
    color?: ColorButton
}

export function ButtonWithIcon ({ icon, color = "action", label, onPress }: InterfaceButtonWithIcon) {

    function getIcon () {
        switch (icon) {
            case "trash":
                return <Trash size={28} color="#2E2E2E" weight="bold" />;

            case "success":
                return <CheckCircle size={28} color="#2E2E2E" weight="bold" />
        }
    }

    return (
        <Container onPress={onPress} color={color}>
            {getIcon()}
            <Text>{label}</Text>
        </Container>
    );
}