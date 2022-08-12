import { 
    Box, 
    Container, 
    Center, 
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input, 
    Stack,
    Heading, 
    Button,
    Text,
    Link
} from '@chakra-ui/react'

import Header from './Header';

function Login() {
    return ( 
    <Box>
        <Header/>

        <Center minH={'70vh'}>
            <Container maxW='md' boxShadow={'lg'} rounded={'lg'}>
                <Box align={'center'}>
                    <Heading fontSize={'3xl'}>Log In</Heading>
                </Box>

                <Stack spacing={6} py={10} px={6}>
                    <FormControl isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' placeholder='Enter your email address' />          
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input type='password' placeholder='Enter your password' />          
                    </FormControl>

                    <Box pt={5}>
                    <Button bg={'tomato'} color={'white'} _hover={{bg: 'red.500'}} minW={'100%'} >
                        Sign In
                    </Button>

                    <Text fontSize={'sm'} color={'gray.600'} align={'center'} pt={5}>
                        Don't have an account? <Link color={'blue.400'}>Sign Up</Link> 
                    </Text>
                    </Box>
                </Stack>
            </Container>
        </Center>
    </Box>
    );
}
export default Login;