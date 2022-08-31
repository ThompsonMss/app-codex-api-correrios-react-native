import { Container, Text } from "./styles";

import LottieView from 'lottie-react-native';
import deleteLottie from '../../assets/lottie/delete.json';

import { CommonActions } from '@react-navigation/native'

export function ConfirmedDelete ({ navigation }) {

    function animationFinish () {
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: "Home" }
                ],
            })
        );
    }

    return (
        <Container>

            <LottieView
                autoPlay
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: 'transparent',
                }}
                speed={2}
                loop={false}
                source={deleteLottie}
                onAnimationFinish={animationFinish}
            />

            <Text>Encomenda excluída com sucesso!</Text>

        </Container>
    );
}