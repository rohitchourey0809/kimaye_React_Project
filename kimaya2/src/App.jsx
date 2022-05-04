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
// import WithSubnavigation from './components/Navbar';
import React from 'react'
import { LoginCard } from './components/LoginCard';
import { SignupCard } from "./components/SignupCard";

// import { Signup } from './components/Signup';

function App() {
  return (
    // <ChakraProvider theme={theme}>
    <>
    <button>rohit</button>
      {/* <WithSubnavigation /> */}
      {/* <Signup /> */}
      <SignupCard/>
      <LoginCard/>
    </>
    // </ChakraProvider>
  );
}

export default App;
