import {
    Scroll,
    ContainerLogo,
    Logo,
    WaterMark,
    ImgWaterMark,
    EmptyObject,
    IconXcircle,
    TextEmptyObject
} from "./styles";

import { ContainerApp } from "@components/ContainerApp";
import { SearchObject } from "./components/SearchObject";

import logotipo from "@assets/images/logotipo.png"
import { CardItemObject } from "./components/CardItemObject";

import waterMarkDark from "@assets/images/back-logo.png";
import waterMarkLight from "@assets/images/back-logo-light.png";
import { useTheme } from "@hooks/useTheme";

export function Main ({ navigation }) {

    function handleGoToDetail () {
        navigation.navigate('Detail')
    }

    const [_, colorScheme] = useTheme();
    const waterMark = colorScheme === "dark" ? waterMarkDark : waterMarkLight;

    return (
        <ContainerApp>
            <Scroll stickyHeaderIndices={[1]}>
                <ContainerLogo><Logo source={logotipo} /></ContainerLogo>
                <SearchObject navigation={navigation} />

                <EmptyObject>
                    <IconXcircle />
                    <TextEmptyObject>Você não está rastreando nenhum objeto no momento.</TextEmptyObject>
                </EmptyObject>

                <CardItemObject onPress={handleGoToDetail} />

            </Scroll>

            <WaterMark>
                <ImgWaterMark source={waterMark} />
            </WaterMark>

        </ContainerApp>
    );
}