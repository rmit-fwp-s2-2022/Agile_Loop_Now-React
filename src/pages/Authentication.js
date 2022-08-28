import {
    Box,
    Container,
    Center,
    Stack,
    Heading,
    Button,
    Text,
    Link,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { generateCode, sendCode } from "../services/VerifyUser";

function Authentication(props){

    const navigate = useNavigate();
    const [verificationCode, setVerificationCode] = useState(props.user.code);

    function resendCode(){
      const newCode = generateCode();
      setVerificationCode(newCode);
      alert("New code sent! Check your email");
      sendCode(props.user.info.name, newCode);
    }
    
    return (
        <Box minH={"87vh"}>
          <Center minH={"70vh"}>
            <Formik
              initialValues={{
                code: ""
              }}
              validationSchema={Yup.object({
                code: Yup.string()
                  .required("Please check your email for verification code")
                  .test('match', 
                    'Invalid code, please check your email', 
                    function() {
                      const emailCode = String(verificationCode);
                      return this.parent.code.trim() === emailCode.trim(); 
                  }),          
              })}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  props.loginUser(props.user.info.email);
                  navigate("/profile");
                }, 1500);
              }}
              validateOnChange={false}
              validateOnBlur={false}
            >
              {(formik) => (
                <Container
                  maxW="md"
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  borderWidth={1}
                  onSubmit={formik.handleSubmit}
                  as="form"
                >
                  <Box align={"center"} pt={8}>
                    <Heading fontSize={"3xl"}>Confirm Sign In</Heading>
                  </Box>

                  
                  <Stack spacing={6} py={10} px={6}>
                    <FormField
                      name="code"
                      type="text"
                      placeholder="Enter your code"
                      label={"Cofirmation Code"}
                    />
                    <Text color={"gray.600"}>We sent a verification code to {props.user.info.email}</Text>
                    <Box>
                      <Stack spacing={4}>
                        <Alert
                          status="success"
                          display={formik.isSubmitting ? "inherit" : "none"}
                        >
                          <AlertIcon />
                          Logging You In!
                        </Alert>
                        <Button
                          type="submit"
                          isLoading={formik.isSubmitting}
                          bg={"tomato"}
                          color={"white"}
                          _hover={{ bg: "red.500" }}
                          minW={"100%"}
                        >
                          Confirm
                        </Button>
    
                        <Text
                          fontSize={"sm"}
                          color={"gray.600"}
                          align={"center"}
                          pt={5}
                        >
                          Didn't receive a code?{" "}
                          <Link color={"blue.400"} onClick={resendCode}>
                            Resend
                          </Link>
                        </Text>
                      </Stack>
                    </Box>
                  </Stack>
                </Container>
              )}
            </Formik>
          </Center>
        </Box>
      );
}
export default Authentication;