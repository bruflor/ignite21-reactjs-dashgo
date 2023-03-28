import { Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps{
    totalCountOfRegister: number;
    registersPerPage: number;
    currentPage: number;
    onPageChange:(page: number) => void
}

const siblingsCount = 1

function generatePagesArray(to:number, from:number){
    return [... new Array(to - from)]
    .map((_, index)=>{
        return from + index +1
    })
    .filter(page => page > 0)
}

export default function Pagination({ totalCountOfRegister,registersPerPage, currentPage,onPageChange}:PaginationProps) {
const lastPage = Math.floor(totalCountOfRegister / registersPerPage)

const previousPages = currentPage > 1 ? generatePagesArray(currentPage -1 - siblingsCount, currentPage -1) : []
const nextPages = currentPage < lastPage ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : []
    return (
        <Stack direction="row" mt="8" justify="space-between" align="center">
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2" justify="space-between">

                {previousPages.length > 0 && previousPages.map((page)=>{
                    return <PaginationItem  number={page}/>
                }) }

                <PaginationItem number={currentPage} isCurrent/>
                
                {nextPages.length > 0 && nextPages.map((page)=>{
                    return <PaginationItem  number={page}/>
                }) }
            </Stack>
        </Stack>
    )
}