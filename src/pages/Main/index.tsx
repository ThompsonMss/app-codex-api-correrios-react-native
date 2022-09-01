import { useContext } from "react";

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

import { ObjectContext } from "../../context/MainContext";

export function Main ({ navigation }) {

    const { objects } = useContext(ObjectContext);

    const objectIsEmpty = !objects.length;

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

                {objectIsEmpty && (
                    <EmptyObject>
                        <IconXcircle />
                        <TextEmptyObject>Você não está rastreando nenhum objeto no momento.</TextEmptyObject>
                    </EmptyObject>
                )}

                {objects.map(object => (
                    <CardItemObject key={object.uuid} onPress={handleGoToDetail} />
                ))}

            </Scroll>

            <WaterMark>
                <ImgWaterMark source={waterMark} />
            </WaterMark>

        </ContainerApp>
    );
}