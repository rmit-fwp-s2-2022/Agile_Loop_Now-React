import { 
    Box, 
    Container, 
    Center, 
    FormControl,
    FormLabel,
    Input, 
    Stack,
    Heading, 
    Button,
    Text,
    Link
} from '@chakra-ui/react'

import Header from './Header';

function SignUp() {
    return ( 
    <Box>
        <Header/>

        <Center minH={'70vh'}>
            <Container maxW='md' boxShadow={'2xl'} rounded={'lg'} borderWidth={1}>
                <Box align={'center'} pt={8}>
                    <Heading fontSize={'3xl'}>Log In</Heading>
                </Box>
                <form>
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
                    <Button type='submit' bg={'tomato'} color={'white'} _hover={{bg: 'red.500'}} minW={'100%'}>
                        Sign In
                    </Button>

                    <Text fontSize={'sm'} color={'gray.600'} align={'center'} pt={5}>
                        Don't have an account? <Link color={'blue.400'}>Sign Up</Link> 
                    </Text>
                    </Box>
                </Stack>
                </form>
            </Container>
        </Center>
    </Box>
    );
}
export default Login;