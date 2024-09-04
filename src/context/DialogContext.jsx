import React from 'react';
import { useDisclosure } from '@nextui-org/react';

const DialogContext = React.createContext();

const DialogContextProvider = ({ children }) => {
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

  return (
    <DialogContext.Provider
      value={{
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
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export { DialogContext, DialogContextProvider };
