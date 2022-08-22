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
import { Link as RouteLink, useNavigate } from "react-router-dom";
import { getUser, setCurrentUser } from "../data/User";

function Login() {
  const navigate = useNavigate();
  return (
    <Box>
      <Center minH={"70vh"}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Email must be a valid Email")
              .required("Email is required"),
            password: Yup.string()
              .required("Password is required")
              .test(
                "validateUser",
                "Invalid Email or Password. Try Again",
                function () {
                  const user = getUser(this.parent.email);
                  if (user != null && user.password === this.parent.password) {
                    return true;
                  } else {
                    return false;
                  }
                }
              ),
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              setCurrentUser(values.email);
              navigate("/");
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
                <Heading fontSize={"3xl"}>Log In</Heading>
              </Box>

              <Stack spacing={6} py={10} px={6}>
                <FormField
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  label={"Email Address"}
                />

                <FormField
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  label={"Password"}
                />

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
                      Sign In
                    </Button>

                    <Text
                      fontSize={"sm"}
                      color={"gray.600"}
                      align={"center"}
                      pt={5}
                    >
                      Don't have an account?{" "}
                      <Link as={RouteLink} to="/signup" color={"blue.400"}>
                        Sign Up
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
export default Login;
