
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export const SignupCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formdata);

    const payload = {
      firstname: formdata.firstname,
      lastname: formdata.lastname,
      email: formdata.email,
      password: formdata.password,
      status: formdata.status,
    };

    fetch('http://localhost:8080/userdata', {
      method: 'POST',
      //
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  };

  // eslint-disable-next-line no-unused-vars
  const handlechange = e => {
    // *const id = e.target.id;
    // *const value = e.target.value;
    // ?destructuiring input data
    const { name, value } = e.target;

    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>

        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input name="firstname" onChange={handlechange} type="text" />
                </FormControl>
                {/* </Box> */}
                {/* <Box> */}
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input name="lastname" onChange={handlechange} type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input name="email" onChange={handlechange} type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  onChange={handlechange}
                  type={showPassword ? 'text' : 'password'}
                />
                <InputRightElement h={'full'}>
                  <Button
                    type="submit"
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword(showPassword => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
