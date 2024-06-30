import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
import mountainSrc from './mountain.svg'

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box className={"text-white "} style={{backgroundImage: "linear-gradient(to right, #000000,#000000, #800000)"}} >
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <HStack spacing={4} alignItems={'center'}>
                        <Box>
                            <img
                                src={mountainSrc}
                                alt="mountain"
                                className="h-16"
                            />
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            <NavLink to={'/'}>About Me</NavLink>
                            <NavLink to={'/resume'}>Resume</NavLink>
                            <NavLink to={'/contact'}>Contact</NavLink>
                        </HStack>
                    </HStack>
                    <IconButton
                        className="bg-red-600"
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <NavLink to={'/'}>About Me</NavLink>
                            <NavLink to={'/resume'}>Resume</NavLink>
                            <NavLink to={'/contact'}>Contact</NavLink>
                        </Stack>
                    </Box>
                ) : null}
        </Box>
    )
}
