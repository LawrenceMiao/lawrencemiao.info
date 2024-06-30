import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
import mountainSrc from './mountain.svg'

export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')}>
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <IconButton
                        className="bg-red-600"
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
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
        </>
    )
}
