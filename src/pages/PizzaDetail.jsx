import React, { useContext } from 'react';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { PizzaCard } from "../pages";
import { MainContext } from '../components/context/MainContext';

const PizzaDetail = ({
  name,
  price,
  ingredients,
  img,
  desc,
  id
}) => {
  const {
    detailPizzaClose,
    detailPizzaOpenChange,
    detailPizzaIsOpen,
    handleReturnToHome
  } = useContext(MainContext);
  const navigate = useNavigate();

  return (
    <Modal
      isOpen={detailPizzaIsOpen}
      onClose={() => {
        detailPizzaClose();
        handleReturnToHome();
        navigate('/');
      }}
      onOpenChange={detailPizzaOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled
      size='sm'
      backdrop='blur'
      className='pizzaDetail'
    >
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1 modal-header'>
          {name}
        </ModalHeader>
        <ModalBody>
          <PizzaCard
            key={id}
            name={name}
            price={price}
            ingredients={ingredients}
            img={img}
            desc={desc}
            id={id}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PizzaDetail;
