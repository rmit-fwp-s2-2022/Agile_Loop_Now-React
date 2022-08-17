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
    Link,
    FormErrorMessage,
    Alert,
    AlertIcon
} from '@chakra-ui/react'
import { useFormik } from 'formik';
import Header from './Header';
import * as Yup from 'yup';
import { Link as RouteLink, useNavigate} from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPass: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Email must be a valid Email").required("Email is required"),
            password: Yup.string().required("Password is required")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/, 
            "Must contain atleast 8 Characters, One uppercase, One lowercase, One digit and One special character"),
            confirmPass: Yup.string().required("Please confirm your password")
            .oneOf([Yup.ref("password"), null], "Passwords must match")
        }),
        onSubmit: (values) => {
            setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                const joined = new Date();
                let day = joined.getDay();
                let date = joined.getDate();
                let month = joined.getMonth() + 1;
                let year = joined.getFullYear();
                let currentDate = `${day} ${date} ${month} ${year}`;
                let user = {
                    "name": values.name,
                    "email": values.email,
                    "password": values.password,
                    "joinedOn": currentDate
                }
                localStorage.setItem(values.email, JSON.stringify(user));
                navigate('/');
            },1000);          
        }
    })

    function success(){
        if (formik.isSubmitting){
            return 'inherit'
        }else {
            return 'none'
        }
    }
    
    return ( 
    <Box>
        <Header/>
        <Center minH={'80vh'}>
            <Container maxW='md' boxShadow={'2xl'} rounded={'lg'} borderWidth={1} as="form" onSubmit={formik.handleSubmit}>
                <Box align={'center'} pt={8}>
                    <Heading fontSize={'3xl'}>Sign Up</Heading>
                </Box>
                
                        <Stack spacing={6} py={10} px={6}>
                            <FormControl isInvalid={formik.errors.name && formik.touched.name} isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input 
                                    name='name' 
                                    type='text'  
                                    placeholder='Enter your name'
                                    {...formik.getFieldProps("name")}
                                    />
                                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                            </FormControl>
                                 
                           
                            <FormControl isInvalid={formik.errors.email && formik.touched.email} isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input 
                                    name='email' 
                                    type='email' 
                                    placeholder='Enter your email address'
                                    {...formik.getFieldProps("email")}
                                     />
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>          
                            </FormControl>

                            <FormControl isInvalid={formik.errors.password && formik.touched.password} isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input 
                                    name='password' 
                                    type='password' 
                                    placeholder='Create a password'
                                    {...formik.getFieldProps("password")}  /> 
                                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={formik.errors.confirmPass && formik.touched.confirmPass} isRequired>
                                <FormLabel>Confirm Password</FormLabel>
                                <Input 
                                    name='confirmPass' 
                                    type='password' 
                                    placeholder='Confirm your password'
                                    {...formik.getFieldProps("confirmPass")}  />
                                    <FormErrorMessage>{formik.errors.confirmPass}</FormErrorMessage>       
                            </FormControl>
                              
                            <Box>
                                <Stack spacing={4}>
                                    <Alert status='success' display={success()}>
                                        <AlertIcon />
                                        Account successfully created!
                                    </Alert> 
                                    <Button type='submit' isLoading={formik.isSubmitting} bg={'tomato'} color={'white'} _hover={{bg: 'red.500'}} minW={'100%'}>
                                        Sign Up
                                    </Button>
                                    
                                    <Text fontSize={'sm'} color={'gray.600'} align={'center'}>
                                        Already have an account? <Link as={RouteLink} to='/login' color={'blue.400'}>Sign In</Link> 
                                    </Text>
                                </Stack>
                            </Box>
               
                        </Stack>
                   
            </Container>
        </Center>
    </Box>
    );
}
export default SignUp;