import { Header } from "@/components/Header";
import Pagination from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { Box, Button, Flex, Heading, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";


export default function User() {
const isWideVersion = useBreakpointValue({
    base: false,
    lg:true
})

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Link href="users/create" passHref>
                            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4","4","6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>
                                    Usuários
                                </Th>
                                {isWideVersion && <Th>
                                    Data de cadastro
                                </Th>}
                                <Th width="8">
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4","4","6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Diego Fernandes</Text>
                                        <Text fontSize="sm" color="gray.300">diego.lorinho@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>31 de Fevereiro de 2023</Td>}
                                <Td>
                                    <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon fontSize="16" as={RiPencilLine} />}>
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}