import { Flex, Text, Avatar, Box } from "@chakra-ui/react";
import React from "react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text> Renan Melo</Text>
        <Text color="gray.300" fontSize="small">
          {" "}
          rgmlo94@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Renan Melo" />
    </Flex>
  );
}
