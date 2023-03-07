import { Flex, HStack, Icon, Avatar, Box, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function Profile() {
    return (

        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Bruna Flôr</Text>
                <Text color="gray.300" fontSize="small">brn.flor@gmail.com</Text>
            </Box>
            <Avatar name="Bruna Flôr" size="md" src="https://avatars.githubusercontent.com/u/100380431?v=4" />
        </Flex>
    )
}