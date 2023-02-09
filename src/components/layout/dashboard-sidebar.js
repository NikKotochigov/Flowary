import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, Divider, Drawer, useMediaQuery } from "@mui/material";
import { ChartBar as ChartBarIcon } from "../../icons/chart-bar";
import { Cog as CogIcon } from "../../icons/cog";
import { ShoppingBag as ShoppingBagIcon } from "../../icons/shopping-bag";
import { User as UserIcon } from "../../icons/user";
import { Users as UsersIcon } from "../../icons/users";
import { XCircle as XCircleIcon } from "../../icons/x-circle";
import { NavItem } from "./nav-item";
import Image from "next/image";
import { theme } from "../../theme";

const items = [
  {
    href: "/",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/stream",
    icon: <UsersIcon fontSize="small" />,
    title: "Stream",
  },
  {
    href: "/wrap",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Wrap",
  },
  {
    href: "/bridge",
    icon: <CogIcon fontSize="small" />,
    title: "Bridge",
  },
  {
    href: "/history",
    icon: <UserIcon fontSize="small" />,
    title: "Activity history",
  },
  {
    href: "/employee",
    icon: <UserIcon fontSize="small" />,
    title: "Employee page",
  },
  {
    href: '/company',
    icon: (<UserIcon fontSize="small" />),
    title: 'Company page'
  },
  {
    href: "/404",
    icon: <XCircleIcon fontSize="small" />,
    title: "Error",
  },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <NextLink href="/" passHref>
            <Image
              alt="logo"
              src="/static/images/Flowary.png"
              width={200}
              height={130}
            />
          </NextLink>
        </Box>
        <Divider
          sx={{
            borderColor: "white",
            opacity: 0.5,
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: "white", opacity: 0.5 }} />
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              mt: 2,
              mx: "auto",
              width: "240px",
              "& img": {
                borderRadius: "16px",
                width: "100%",
              },
            }}
          >
            <Image
              alt="Feedback"
              src="/static/images/feedback.jpg"
              width={100}
              height={130}
            />
          </Box>
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "#0047AB",
            // color: '#0047AB',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#0047AB",
          // color: '#FFFFFF',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
