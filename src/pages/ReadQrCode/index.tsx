import React from "react";
import {
    BottomMask,
    ButtonGoBack,
    CenterMask,
    Container,
    ContainerLabelHeader,
    ContainerMask,
    ContainerNotPermission,
    FillCenter,
    FillCenterMask,
    HeaderNavigation,
    IconCaretLeft,
    Mask,
    TextNotPermission,
    TextTopMask,
    TopMask
} from "./styles";

import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet } from "react-native";

export function ReadQrCode ({ navigation }) {

    const [hasPermission, setHasPermission] = React.useState(null);
    const [scanned, setScanned] = React.useState(false);

    React.useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        navigation.navigate('Home', { qrCodecodeObject: data });
    };

    if (hasPermission === null) {
        return (
            <ContainerNotPermission>
                <TextNotPermission>Requisitando permissão para a câmera.</TextNotPermission>
            </ContainerNotPermission>
        );
    }
    if (hasPermission === false) {
        return (
            <ContainerNotPermission>
                <TextNotPermission>Sem acesso a câmera.</TextNotPermission>
            </ContainerNotPermission>
        );
    }

    return (
        <Container>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />

            <ContainerMask>
                <HeaderNavigation>
                    <ButtonGoBack onPress={navigation.goBack}>
                        <IconCaretLeft />
                    </ButtonGoBack>
                    <ContainerLabelHeader>Voltar</ContainerLabelHeader>
                </HeaderNavigation>

                <Mask>
                    <TopMask>
                        <TextTopMask>Posicione o QrCode da encomenda na marcação abaixo e aguarde.</TextTopMask>
                    </TopMask>

                    <CenterMask>
                        <FillCenter />
                        <FillCenterMask />
                        <FillCenter />
                    </CenterMask>

                    <BottomMask />
                </Mask>
            </ContainerMask>
        </Container>
    );
}