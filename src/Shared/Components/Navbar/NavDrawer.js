import React from "react";
import Button from "@mui/material/Button";
import DehazeIcon from '@mui/icons-material/Dehaze';

//faltu
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

export default function NavDrawer() {
  return (
    <Button
      sx={{
        textTransform: "capitalize",
        fontSize: 16,
        height: "100%",
      }}
      variant="text"
    >
      <DehazeIcon/>
    </Button>
  );
}
