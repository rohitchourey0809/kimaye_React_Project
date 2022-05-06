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
// import { WithSubnavigation } from './components/Navbar';
import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { Signup } from './components/Signup';
// import { Signupform } from './components/Signupform';
import { Loginform } from './components/loginform';

function App() {
  return (
    <>
      <button>Welcome To Signupform Page</button>
      {/* <WithSubnavigation /> */}
      <Loginform />
      {/* <Routes> */}
        {/* <Route path="/signupform" component={<Signupform />} /> */}

        {/* <Route path="/loginform" component={<Loginform />} />  */}
       
       
      {/* </Routes> */}
      {/* */}
      {/* <SignupCard/> */}
      {/* <LoginCard/> */}
      {/* <Signupform/> */}
      {/* <Loginform/> */}
    </>
  );
}

export default App;
