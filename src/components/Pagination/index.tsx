import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegister: number |undefined;
    registersPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void
}

const siblingsCount = 1

// function generatePagesArray(to: number, from: number) {
function generatePagesArray(to: number, from: number) {
    return [... new Array(to - from)]
        .map((_, index) => {
            return from + index + 1
        })
        .filter(page => page > 0)
}

export default function Pagination({ totalCountOfRegister=1, registersPerPage, currentPage, onPageChange }: PaginationProps) {
    const lastPage = totalCountOfRegister && Math.floor(totalCountOfRegister / registersPerPage)

    const previousPages = currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : []
    const nextPages = currentPage < lastPage ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : []
    return (
        <Stack direction="row" mt="8" justify="space-between" align="center">
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2" justify="space-between">

                {currentPage > (1 + siblingsCount) && (<><PaginationItem onPageChange={onPageChange} number={1} /> {currentPage > (2 + siblingsCount) && <Text color={"gray.300"} textAlign="center" width={8}>...</Text>}</>)}

                {previousPages.length > 0 && previousPages.map((page) => {
                    return <PaginationItem onPageChange={onPageChange} number={page} />
                })}

                <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

                {nextPages.length > 0 && nextPages.map((page) => {
                    return <PaginationItem onPageChange={onPageChange} number={page} />
                })}

                {(currentPage + siblingsCount) < lastPage && (<>{(currentPage + 1 + siblingsCount) < lastPage && <Text color={"gray.300"} textAlign="center" width={8}>...</Text>} <PaginationItem onPageChange={onPageChange} number={lastPage} /> </>)}

            </Stack>
        </Stack>
    )
}