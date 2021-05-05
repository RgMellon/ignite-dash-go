import { Button } from "@chakra-ui/Button";
import React from "react";

type PaginationItemProps = {
  isCurrent?: boolean;
  number: number;
};

export function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          cursor: "default",
          bgColor: "pink.500",
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.700"
      _hover={{ bgColor: "gray.500" }}
    >
      {number}
    </Button>
  );
}
