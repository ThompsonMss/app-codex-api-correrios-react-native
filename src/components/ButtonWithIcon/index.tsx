import { CheckCircle, Trash } from "phosphor-react-native";
import { Container, Text } from "./styles";

type TypeIcon = "trash" | "success";

interface InterfaceButtonWithIcon {
    icon: TypeIcon;
    label: string;
    onPress: (...args: any) => any;
}

export function ButtonWithIcon ({ icon, label, onPress }: InterfaceButtonWithIcon) {

    function getIcon () {
        switch (icon) {
            case "trash":
                return <Trash size={28} color="#2E2E2E" />;

            case "success":
                return <CheckCircle size={28} color="#2E2E2E" />
        }
    }

    return (
        <Container onPress={onPress}>
            {getIcon()}
            <Text>{label}</Text>
        </Container>
    );
}