import { useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import { InterfaceObject } from "../..//reducers/mainReducer";

export function Main({ navigation, route }) {

    const { objects, popularList } = useContext(ObjectContext);

    const objectIsEmpty = !objects.length;

    function handleGoToDetail(object: InterfaceObject) {
        navigation.navigate('Detail', object);
    }

    const [_, colorScheme] = useTheme();
    const waterMark = colorScheme === "dark" ? waterMarkDark : waterMarkLight;

    const [listPopulated, setListPopulated] = useState(false);

    async function initializerPopularList() {

        const value = await AsyncStorage.getItem('@codex__objects:1.0.0')

        if (value) {
            popularList(JSON.parse(value));
        }

        setListPopulated(true);
    }

    useEffect(() => {
        initializerPopularList();
    }, []);

    useEffect(() => {
        if (listPopulated) {
            AsyncStorage.setItem('@codex__objects:1.0.0', JSON.stringify(objects)).then();
        }
    }, [objects, listPopulated]);

    return (
        <ContainerApp>
            <Scroll stickyHeaderIndices={[1]}>

                <ContainerLogo><Logo source={logotipo} /></ContainerLogo>
                <SearchObject navigation={navigation} route={route} />

                {objectIsEmpty && (
                    <EmptyObject>
                        <IconXcircle />
                        <TextEmptyObject>Você não está rastreando nenhum objeto no momento.</TextEmptyObject>
                    </EmptyObject>
                )}

                {objects.map(object => (
                    <CardItemObject object={object} key={object.uuid} onPress={() => handleGoToDetail(object)} />
                ))}

            </Scroll>

            <WaterMark>
                <ImgWaterMark source={waterMark} />
            </WaterMark>

        </ContainerApp>
    );
}