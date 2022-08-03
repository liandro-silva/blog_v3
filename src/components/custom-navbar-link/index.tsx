import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { type PropsWithChildren } from "react";
import theme from "../../theme";

/**
 *
 * @param {string} pathReference used to set current route
 * @example
 * <CustomNavbarLink pathReference="/">Text<CustomNavbarLink/>
 */
export const CustomNavbarLink: React.FC<
  PropsWithChildren<{
    pathReference: string;
  }>
> = ({ children, pathReference }) => {
  const router = useRouter();
  return (
    <Button
      sx={{
        color: theme.palette.text.primary,
        fontWeight:
          router.asPath === `${pathReference}`
            ? theme.typography.fontWeightBold
            : theme.typography.fontWeightMedium,
      }}
    >
      {children}
    </Button>
  );
};
