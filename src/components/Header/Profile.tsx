import { Flex, Text, Avatar, Box } from "@chakra-ui/react";
import React from "react";

type ProfileProps = {
  showProfileData: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {!!showProfileData && (
        <Box mr="4" textAlign="right">
          <Text> Renan Melo</Text>
          <Text color="gray.300" fontSize="small">
            {" "}
            rgmlo94@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Renan Melo" />
    </Flex>
  );
}
