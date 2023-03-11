import { Stack, Icon, Box, Link, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiDashboardLine, RiContactsLine } from "react-icons/ri";

interface NavSectionProps{
    children: ReactNode;
    title: string;
}

export function NavSection({title, children}:NavSectionProps) {
    return (
        <Box>
            <Text fontWeight="bold" color='gray.400' fontSize="small">
                {title}
            </Text>
            <Stack spacing="4" mt="8" display="flex" align="stretch">
                {children}
            </Stack>
        </Box>
    )
}