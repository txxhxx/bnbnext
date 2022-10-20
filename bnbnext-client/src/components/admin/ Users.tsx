import * as React from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
} from "@mui/joy";

const data = [
  {
    name: "Solo Dolo",
    email: "solodolo@gmail.com",
    avatar: "https://i.pravatar.cc/40?img=3",
    avatar2x: "https://i.pravatar.cc/80?img=3",
    createdAt: "21 Oct 2022",
  },
  {
    name: "Solo Dolo",
    email: "solodolo@gmail.com",
    avatar: "https://i.pravatar.cc/40?img=3",
    avatar2x: "https://i.pravatar.cc/80?img=3",
    createdAt: "21 Oct 2022",
  },
];

export default function Users() {
  return (
    <List>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemButton
              {...(index === 0 && { variant: "soft", color: "primary" })}
              sx={{ p: 2 }}
            >
              <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                <Avatar
                  alt=""
                  src={item.avatar}
                  srcSet={item.avatar2x}
                  sx={{ borderRadius: "sm" }}
                />
              </ListItemDecorator>
              <Box sx={{ pl: 2, width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 0.5,
                  }}
                >
                  <Typography level="body3">{item.name}</Typography>
                  <Typography level="body3">{item.email}</Typography>
                </Box>
              </Box>
            </ListItemButton>
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
}
