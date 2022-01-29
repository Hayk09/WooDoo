import React from "react";
import { Link } from 'react-router-dom'
import { Flex, Box, Text, HStack, InputRightElement, InputGroup, Input, Button } from "@chakra-ui/react"
import { ReactComponent as Logo } from '../../assets/WD.svg'
import { ReactComponent as Search } from '../../assets/search.svg'

const Navbar = () => {
    return (
        <Flex justifyContent='space-between' alignItems="center" >
            <Box ml="4rem" mt="1rem" >
                <Link to="/">
                    <Logo />
                </Link>
            </Box>
            <Box mt="1rem">
                <HStack spacing="4rem" >
                    <Link>
                        <Text fontWeight="500" color="white">About</Text>
                    </Link>
                    <Link>
                        <Text fontWeight="500" color="white">Contacts</Text>
                    </Link>
                    <Link>
                        <Text fontWeight="500" color="white">Delivery</Text>
                    </Link>
                </HStack>
            </Box>
            <Box mt="1rem">
                <InputGroup >
                    <Input borderColor="#C4C4C4" />
                    <InputRightElement children={<Search />} />
                </InputGroup>
            </Box>
            <Box mr="4rem">
                <HStack spacing="1rem">
                    <Link to='/login'>
                        <Button
                            w="90px"
                            borderRadius="8px"
                            borderColor="#E09145"
                            color="white" >
                            Sign In
                        </Button>
                    </Link>
                    <Link to='/register'>
                        <Button
                            w="90px"
                            borderRadius="8px"
                            border="25px"
                            borderColor="#E5E5E5"
                            color="#E09145">
                            Sign Up
                        </Button>
                    </Link>
                </HStack>
            </Box>
        </Flex>
    )
}
export default Navbar