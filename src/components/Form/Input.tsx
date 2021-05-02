import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

type InputProps = {
  name: string;
  label: string;
} & ChakraInputProps;

export function Input({ label, name, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor="password">{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: "gray.900" }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
