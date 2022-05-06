// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Checkbox,
//   Stack,
//   Link,
//   Button,
//   Heading,
//   Text,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import { useEffect, useState } from 'react';

// export const LoginCard = () => {
 





   
 
//       //  useEffect(() => {
//       //    getdata();
//       //  }, []);
//     //  const getdata = async () => {
//     //    try {
//     //      const res = await fetch('http://localhost:8080/userdata');
//     //      const data = await res.json();
//     //      // setloginData(data)
//     //      console.log('data', data);
//     //    } catch (err) {
//     //      console.error(err);
//     //    }
//     //  };

//      const loginsubmit = async () => {
//     try {
//       const [logindata, setloginData] = useState({
//         loginEmail: '',
//         loginPassword: '',
//       });




//         const handlechange = e => {
//           //*const id = e.target.id;
//           //*const value = e.target.value;
//           //?destructuiring input data
//           const { id, value } = e.target;

//           setloginData({
//             ...logindata,
//             [id]: value,
//           });

//           console.log(e.target.id);
//         };
//     } catch (error) {
//       console.log('error:', error);
//     }

//        if (
//          logindata.loginEmail === data.email &&
//          logindata.loginPassword === data.password
//        ) {
//          console.log(logindata.loginEmail, 'ksjdbfdbf');
//          alert('LoginSuccessful');
//        }
//      };

//   return (
//     <Flex
//       minH={'100vh'}
//       align={'center'}
//       justify={'center'}
//       bg={useColorModeValue('gray.50', 'gray.800')}
//     >
//       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//         <Stack align={'center'}>
//           <Heading fontSize={'4xl'}>Sign in to your account</Heading>
//           <Text fontSize={'lg'} color={'gray.600'}>
//             to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
//           </Text>
//         </Stack>
//         <Box
//           rounded={'lg'}
//           bg={useColorModeValue('white', 'gray.700')}
//           boxShadow={'lg'}
//           p={8}
//         >
//           <Stack spacing={4}>
//             <FormControl id="email">
//               <FormLabel>Email address</FormLabel>
//               <Input id="email" onChange={handlechange} type="email" />
//             </FormControl>
//             <FormControl id="password">
//               <FormLabel>Password</FormLabel>
//               <Input id="password" onChange={handlechange} type="password" />
//             </FormControl>
//             <Stack spacing={10}>
//               <Stack
//                 direction={{ base: 'column', sm: 'row' }}
//                 align={'start'}
//                 justify={'space-between'}
//               >
//                 <Checkbox>Remember me</Checkbox>
//                 <Link color={'blue.400'}>Forgot password?</Link>
//               </Stack>
//               <Button
//                 onClick={loginsubmit}
//                 bg={'blue.400'}
//                 color={'white'}
//                 _hover={{
//                   bg: 'blue.500',
//                 }}
//               >
//                 Sign in
//               </Button>
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// };
