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
import { Link as RouteLink, useNavigate } from "react-router-dom";
import FormField from "./FormField";
import { addUser } from "../data/User";

function SignUp() {
  const navigate = useNavigate();
  return (
    <Box>
      <Center minH={"80vh"}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPass: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
              .email("Email must be a valid Email")
              .required("Email is required"),
            password: Yup.string()
              .required("Password is required")
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
                "Must contain atleast 8 Characters, One uppercase, One lowercase, One digit and One special character"
              ),
            confirmPass: Yup.string()
              .required("Please confirm your password")
              .oneOf([Yup.ref("password"), null], "Passwords must match"),
          })}
          onSubmit={(values) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              const joined = new Date();
              let day = joined.getDay();
              let date = joined.getDate();
              let month = joined.getMonth() + 1;
              let year = joined.getFullYear();
              let currentDate = `${day} ${date} ${month} ${year}`;
              let user = {
                name: values.name,
                email: values.email,
                password: values.password,
                joinedOn: currentDate,
              };
              // localStorage.setItem(values.email, JSON.stringify(user));
              addUser(user);
              navigate("/");
            }, 1500);
          }}
        >
          {(formik) => (
            <Container
              maxW="md"
              boxShadow={"2xl"}
              rounded={"lg"}
              borderWidth={1}
              as="form"
              onSubmit={formik.handleSubmit}
            >
              <Box align={"center"} pt={8}>
                <Heading fontSize={"3xl"}>Sign Up</Heading>
              </Box>

              <Stack spacing={6} py={10} px={6}>
                <FormField
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  label={"Name"}
                />

                <FormField
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  label={"Email Address"}
                />

                <FormField
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  label={"Password"}
                />

                <FormField
                  name="confirmPass"
                  type="password"
                  placeholder="Confirm your password"
                  label={"Confirm Password"}
                />

                <Box>
                  <Stack spacing={4}>
                    <Alert
                      status="success"
                      display={formik.isSubmitting ? "inherit" : "none"}
                    >
                      <AlertIcon />
                      Account successfully created!
                    </Alert>
                    <Button
                      type="submit"
                      isLoading={formik.isSubmitting}
                      bg={"tomato"}
                      color={"white"}
                      _hover={{ bg: "red.500" }}
                      minW={"100%"}
                    >
                      Sign Up
                    </Button>

                    <Text fontSize={"sm"} color={"gray.600"} align={"center"}>
                      Already have an account?{" "}
                      <Link as={RouteLink} to="/login" color={"blue.400"}>
                        Sign In
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
export default SignUp;
