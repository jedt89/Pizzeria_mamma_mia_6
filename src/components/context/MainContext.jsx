import React, { useState } from 'react';
import { useDisclosure } from '@nextui-org/react';
import pizzaData from '../models/pizzas';

const MainContext = React.createContext();

const MainContextProvider = ({ children }) => {
  const [registry, setRegistry] = useState(false);
  const [pizza, setPizza] = useState(null);
  const [pizzas, setPizzas] = useState(pizzaData);
  const [pizzaAdded, setPizzaAdded] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const {
    onOpen: registerDialogOpen,
    onClose: registerDialogClose,
    isOpen: registerDialogIsOpen,
    onOpenChange: registerDialogOpenChange
  } = useDisclosure();

  const {
    onOpen: loginDialogOpen,
    onClose: loginDialogClose,
    isOpen: loginDialogIsOpen,
    onOpenChange: loginDialogOpenChange
  } = useDisclosure();

  const {
    onOpen: cartOpen,
    onClose: cartClose,
    isOpen: cartIsOpen,
    onOpenChange: cartOpenChange
  } = useDisclosure();

  const {
    onOpen: profileOpen,
    onClose: profileClose,
    isOpen: profileIsOpen,
    onOpenChange: profileOpenChange
  } = useDisclosure();

  const {
    onOpen: detailPizzaOpen,
    onClose: detailPizzaClose,
    isOpen: detailPizzaIsOpen,
    onOpenChange: detailPizzaOpenChange
  } = useDisclosure();

  const handleReturnToHome = () => {
    setExpanded(false);
  };


  return (
    <MainContext.Provider
      value={{
        registry,
        setRegistry,
        pizza,
        setPizza,
        pizzas,
        setPizzas,
        pizzaAdded,
        setPizzaAdded,
        totalPrice,
        setTotalPrice,
        expanded,
        setExpanded,
        registerDialogOpen,
        registerDialogClose,
        registerDialogIsOpen,
        registerDialogOpenChange,
        loginDialogOpen,
        loginDialogClose,
        loginDialogIsOpen,
        loginDialogOpenChange,
        cartOpen,
        cartClose,
        cartIsOpen,
        cartOpenChange,
        profileOpen,
        profileClose,
        profileIsOpen,
        profileOpenChange,
        detailPizzaOpen,
        detailPizzaClose,
        detailPizzaIsOpen,
        detailPizzaOpenChange,
        handleReturnToHome
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainContextProvider };
