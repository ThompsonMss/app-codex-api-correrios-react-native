import React from 'react';
import {
    ButtonClose,
    ContainerModal,
    Header,
    IconXCircle,
    Input,
    Modal,
    Text
} from './styles';

import { Modalize } from 'react-native-modalize';
import { XCircle } from 'phosphor-react-native';
import { ButtonWithIcon } from '@components/ButtonWithIcon';
import { Platform } from 'react-native';

interface InterfaceAlterNameOrder {
    refModal: React.MutableRefObject<Modalize>;
}

export function AlterNameOrder ({ refModal }: InterfaceAlterNameOrder) {

    const [inputFocused, setInputFocused] = React.useState(false)

    function handleOnCloseModal () {
        refModal.current.close();
    }

    return (
        <Modal
            ref={refModal}
            modalStyle={{ flex: 1, marginTop: 35 }}
            HeaderComponent={
                <ContainerModal>
                    <Header>
                        <Text>Nome da encomenda:</Text>
                        <ButtonClose onPress={handleOnCloseModal}>
                            <IconXCircle />
                        </ButtonClose>
                    </Header>

                    <Input
                        focused={inputFocused}
                        onBlur={() => setInputFocused(false)}
                        onFocus={() => setInputFocused(true)}
                        value="Encomenda 01"
                        autoFocus
                        onSubmitEditing={() => alert('oi')}
                    />

                    <ButtonWithIcon
                        icon="success"
                        label="Salvar"
                        color='success'
                        onPress={() => alert('Thompson')}
                    />
                </ContainerModal>
            }
        >
        </Modal>
    );
}