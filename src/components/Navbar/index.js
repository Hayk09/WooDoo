import React from "react";
import { Link } from 'react-router-dom'
import {
    Flex,
    Box,
    Text,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    IconButton,
    MenuList,
    Button
} from "@chakra-ui/react"
import { ReactComponent as Logo } from '../../assets/WD.svg'
import { ReactComponent as Burger } from '../../assets/burger.svg'

const Navbar = () => {
    return (
        <Flex
            justifyContent='space-between'
            alignItems="center">
            <Box
                ml="4rem"
                mt="4rem" >
                <Menu >
                    <MenuButton
                        w='34px'
                        h='20px'
                        as={IconButton}
                        aria-label='Options'
                        icon={<Burger />}

                    />
                    <MenuList>
                        <MenuItem command='⌘T'>
                            New Tab
                        </MenuItem>
                        <MenuItem command='⌘N'>
                            New Window
                        </MenuItem>
                        <MenuItem command='⌘⇧N'>
                            Open Closed Tab
                        </MenuItem>
                        <MenuItem command='⌘O'>
                            Open File...
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Box mt="1rem">
                <Link to='/'>
                  <Logo/>
                </Link>
            </Box>
            {/* <Box mt="1rem">
                <InputGroup >
                    <Input borderColor="#C4C4C4" />
                    <InputRightElement children={<Search />} />
                </InputGroup>
            </Box> */}
            <Box mr="4rem">
                <Box>
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
                </Box>
            </Box>
        </Flex>
    )
}
export default Navbar