import { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import {
  RegisterDialog,
  CartDialog,
  Home,
  NotFound,
  LoginDialog,
  ProfileDialog,
  PizzaDetail
} from './pages';
import { navbarItems } from './components/models/menu';
import { getPizzas, getPizza } from './service/fetchPizzas';
import toast from 'react-hot-toast';
import fields from './components/models/Fields';
import { MainContext } from './components/context/MainContext';
import header from './assets/img/header.png';

function App() {
  const {
    setRegistry,
    pizza,
    setPizza,
    setPizzas,
    setExpanded,
    registerDialogOpen,
    registerDialogIsOpen,
    loginDialogOpen,
    loginDialogIsOpen,
    profileOpen,
    profileIsOpen,
    detailPizzaOpen,
    detailPizzaIsOpen,
    cartIsOpen
  } = useContext(MainContext);

  const { PIZZA_LIST_UPDATED } = fields;

  const showRegistryModal = (isRegistry) => {
    if (!registerDialogIsOpen) {
      setRegistry(isRegistry);
      registerDialogOpen();
    }
  };

  const showLoginModal = () => {
    if (!loginDialogIsOpen) {
      loginDialogOpen();
    }
  };

  const showProfileModal = () => {
    if (!profileIsOpen) {
      profileOpen();
    }
  };

  const showPizzaDetailModal = () => {
    if (!detailPizzaIsOpen) {
      detailPizzaOpen();
    }
  };

  const fetchPizzas = async () => {
    const fetchedPizzas = await getPizzas();
    const updatedPizzas = fetchedPizzas.map((pizza) => ({
      ...pizza,
      total: pizza.price,
      quantity: 1
    }));
    setPizzas(updatedPizzas);
    toast.success(PIZZA_LIST_UPDATED, { position: 'top-right' });
  };

  const handleExpand = async (id) => {
    const individualPizza = await getPizza(id);
    setPizza(individualPizza);
    setExpanded(true);
    showPizzaDetailModal();
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  const disabledButtons = navbarItems
    .map((item) => {
      switch (item.key) {
        case 'login':
          item.action = showLoginModal;
          break;
        case 'register':
          item.action = () => showRegistryModal(true);
          break;
        case 'home':
          item.action = fetchPizzas;
          break;
        case 'profile':
          item.action = showProfileModal;
          break;
        default:
          break;
      }
      return item;
    })
    .filter(
      (item) =>
        !['login', 'register', 'home', 'profile'].includes(item.key) &&
        item.disabled
    )
    .map((item) => item.key);

  const modalActiveStyle =
    registerDialogIsOpen ||
    loginDialogIsOpen ||
    profileIsOpen ||
    detailPizzaIsOpen ||
    cartIsOpen
      ? {
          backgroundImage: `url(${header})`,
          backgroundPosition: 'center',
          backgroundSize: 'inherit',
          backgroundRepeat: 'no-repeat'
        }
      : { backgroundImage: 'none' };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Navbar
        disabledButtons={disabledButtons}
        items={navbarItems}
        token={false}
      />
      <div id='routes' style={{ minHeight: '100vh',  }}>
        <Routes>
          <Route path='/' element={<Home handleExpand={handleExpand} />} />
          <Route path='/register' element={<RegisterDialog />} />
          <Route path='/login' element={<LoginDialog />} />
          <Route path='/cart' element={<CartDialog />} />
          {pizza && (
            <Route
              path={`/pizza/${pizza.id}`}
              element={<PizzaDetail {...pizza} />}
            />
          )}
          <Route path='/profile' element={<ProfileDialog />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
