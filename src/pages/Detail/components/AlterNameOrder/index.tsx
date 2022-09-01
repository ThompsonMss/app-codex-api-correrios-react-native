import React, { useState } from 'react';
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
    nameOfObject: string;
    onAction: (newName: string) => void;
}

export function AlterNameOrder({ refModal, nameOfObject, onAction }: InterfaceAlterNameOrder) {

    const [name, setName] = useState<string>(nameOfObject);
    const [inputFocused, setInputFocused] = React.useState(false)

    function handleOnCloseModal() {
        refModal.current.close();
    }

    function handleEdit() {
        onAction(name);
        handleOnCloseModal();
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
                        onSubmitEditing={handleEdit}
                        value={name}
                        onChangeText={text => setName(text)}
                    />

                    <ButtonWithIcon
                        icon="success"
                        label="Salvar"
                        color='success'
                        onPress={handleEdit}
                    />
                </ContainerModal>
            }
        >
        </Modal>
    );
}