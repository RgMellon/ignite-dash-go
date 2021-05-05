import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import React, { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";

type NavLinkProps = {
  icon: ElementType;
  children: string;
} & ChakraLinkProps;

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
