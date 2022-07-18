//libreries
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//React component pages
import { Home } from '../pages/Home.jsx';
import { NotFound } from '../pages/NotFound.jsx';

//React Components Containers
import { Layout } from '../containers/layout.jsx';
import { LogIn } from '../containers/logIn.jsx';
import { RecoveryPassword } from '../containers/RecoveryPassword.jsx';
import { NewPassword } from '../containers/NewPassword.jsx';
import { SignUp } from '../containers/SignUp.jsx';
import { Account } from '../containers/Account.jsx'
import { Checkout } from '../containers/Checkout.jsx';
import { Orders } from '../containers/Orders.jsx';

//hooks and Context
import { AppContext } from '../context/AppContext.js';
import { useInitialState } from '../hooks/useInitialState.js';

const App = () => {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>

      <BrowserRouter>
        <Layout>
          <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/NewPassword" element={<NewPassword />} />
              <Route path="/log-in" element={<LogIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/recovery-password" element={<RecoveryPassword />} />
              <Route path="/account" element={<Account />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orders" element={<Orders />} />

              <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>

      </BrowserRouter>
    
    </AppContext.Provider>
  )
};

export { App }
