import React, { useContext } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { TbChartPieFilled } from 'react-icons/tb';
import profileIcon from '../assets/img/profileIcon.png';
import { MainContext } from '../components/context/MainContext';

const ProfileDialog = () => {
  const {
    profileClose,
    profileIsOpen,
    profileOpenChange,
    handleReturnToHome
  } = useContext(MainContext);
  const navigate = useNavigate();

  return (
    <Modal
      isOpen={profileIsOpen}
      onOpenChange={profileOpenChange}
      onClose={() => {
        profileClose();
        handleReturnToHome();
        navigate('/');
      }}
      isDismissable={false}
      isKeyboardDismissDisabled
      size='xs'
      backdrop='blur'
    >
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1 modal-header'>
          Perfil
        </ModalHeader>
        <ModalBody>
          <div className='flex-column align-items-center gap-1rem' style={{ fontWeight: 'bold' }}>
            <img src={profileIcon} alt='Profile Icon' style={{ height: '100px' }} />
            <div>Jonathan Díaz</div>
            <div>jonathan.diaz@pizzeria.com</div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className='flex-column align-items-center'>
            <div className='display-flex justify-center gap-1rem modal-buttons'>
              <Button
                startContent={<TbChartPieFilled />}
                variant='ghost'
                color='warning'
                onClick={() => {
                  profileClose();
                  navigate('/');
                }}
              >
                Cerrar sesión
              </Button>
            </div>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProfileDialog;
