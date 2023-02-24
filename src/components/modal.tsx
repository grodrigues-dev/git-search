import { UserDetails } from '@/types';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react'
import { ModalContainer, ModalContent, UserModal, Button } from './styles'

interface ModalProps {
    user: string;
    closeModal: () => void
}

export default function Modal({
    user,
    closeModal
}: ModalProps) {

    const [userDetails, setUserDetails] = useState<UserDetails>();

    useEffect(() => {
        axios.get(`https://api.github.com/users/${user}`).then((res) => {
            setUserDetails(res.data);
        }).catch(() => {
            window.alert('Erro ao consultar detalhes do usuário');
            closeModal();
        });
    }, []);

    return (
        <ModalContainer>
            <UserModal>
                <Image
                    src="/close.png"
                    alt="close icon"
                    width={24}
                    height={24}
                    onClick={closeModal}
                />
                {
                    userDetails &&
                    <>
                        <Image
                            src={userDetails.avatar_url}
                            alt={`${userDetails.login} avatar`}
                            width={100}
                            height={100}
                            style={{ alignSelf: 'center', borderRadius: '100%'}}
                        />
                        <ModalContent>Nome: {userDetails.name}</ModalContent>
                        <ModalContent>Username: {userDetails.login}</ModalContent>
                        <ModalContent>Localização: {userDetails.location}</ModalContent>
                        <ModalContent>E-mail: {userDetails.login}</ModalContent>
                        <ModalContent>Repositórios Públicos: {userDetails.public_repos}</ModalContent>
                        <Button>Visitar Perfil</Button>
                    </>
                }
            </UserModal>
        </ModalContainer>
    )
}