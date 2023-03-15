import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string
} 

const InputBase:ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, ...rest}, ref)=>{
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput ref={ref} name={name} id={name} {...rest} focusBorderColor="pink.500" bgColor="gray.900" _hover={{ bgColor: 'gray.900' }} size="lg" />
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)