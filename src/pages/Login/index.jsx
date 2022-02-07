import React, { useState } from "react";
import {
  VStack,
  Input,
  Text,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { getTodo } from "../../graphql/queries";
import { Link, useHistory } from "react-router-dom";
import { useUser } from "../../hooks";

const Login = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const { setUserObject } = useUser()

  const history = useHistory()

  const submit = async (form) => {
    try {
      setLoading(true)
      const cognitoUser = await Auth.signIn({
        username: form.email.toLowerCase(),
        password: form.password,
      });

      const { data } = await API.graphql(graphqlOperation(getTodo, {id: cognitoUser.username}))
      // setUserObject({user: data.getTodo, loading: false})
      history.push('/')
    } catch (e) {
      setLoading(false)
      console.log("error signing in", e);
    }
  };

  return (
    <>
      <Flex justifyContent="center" w="full"  bg='#292C35'>
        <Box w="full" maxW="600px" mt='6rem'>
          <form noValidate onSubmit={handleSubmit(submit)}>
            <VStack spacing="5" px="8">
              <Input
                placeholder="email"
                isInvalid={!!errors.email}
                {...register("email", { required: true })}
              />
              <Input
                type="password"
                placeholder="password"
                isInvalid={!!errors.password}
                {...register("password", { required: true })}
              />
              <Button isLoading={loading} type="submit" color='#E09145'>Log In</Button>
              <Link to="/forgotpassword">
                <Button color='#E09145'>Forgot password?</Button>
              </Link>
              <Link to="/register">
                <Button color='#E09145'>Create New Account</Button>
              </Link>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
