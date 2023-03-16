import { Input } from "@/components/Form/Input";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Box, Divider, Flex, Heading, HStack, SimpleGrid, VStack, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler } from "react-hook-form/dist/types/form";



type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export default function CreateUser() {
const createUserFormSchema = yup.object().shape({
name: yup.string().required("Nome obrigatório"),
email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
password: yup.string().required("Senha obrigatória").min(6, "No minimo 6 caracteres"),
password_confirmation: yup.string().oneOf([yup.ref('password')],"as senhas precisam ser iguais"),
})


const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(createUserFormSchema)
})

const handleCreateUser:SubmitHandler<CreateUserFormData> = async (value) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(value)

}
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box as="form" flex="1" borderRadius={8} bg="gray.800" p="8" onSubmit={handleSubmit(handleCreateUser)}>
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input {...register("name")} label="Nome completo" error={formState.errors.name}/>
                            <Input {...register("email")} label="E-mail" type="email" error={formState.errors.email}/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input {...register("password")} label="Senha" type="password" error={formState.errors.password} />
                            <Input {...register("password_confirmation")} label="Confirmação da senha" type="password" error={formState.errors.password_confirmation} />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button colorScheme="pink" type="submit" isLoading={formState.isSubmitting}>Salvar</Button>
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    )
}