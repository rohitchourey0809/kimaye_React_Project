// import React from 'react';
// import {
//   ChakraProvider,
//   Box,
//   Text,
//   Link,
//   VStack,
//   Code,
//   Grid,
//   theme,
// } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import { WithSubnavigation } from './components/Navbar';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Signup } from './components/Signup';
import {ADD} from './components/add.jsx'
import { Signupform } from './components/Signupform';
import { Loginform } from './components/Loginform';

function App() {
  return (
    <>
      <button>Welcome To Signupform Page</button>
      <WithSubnavigation />
      {/* <Loginform /> */}
      {/* <Signupform /> */}
      <Routes>
        <Route path="/signupform" element={<Signupform />} />

        <Route path="/loginform" element={<Loginform />} />
        <Route path="/add" element={<ADD />} />
      </Routes>
      {/* */}
      {/* <SignupCard/> */}
      {/* <LoginCard/> */}

      {/* <Loginform/> */}
    </>
  );
}

export default App;
