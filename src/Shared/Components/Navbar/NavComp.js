import React from "react";
import Button from "@mui/material/Button";
import DiamondIcon from "@mui/icons-material/Diamond";
import NavDrawer from "./NavDrawer";

export default function NavComp() {
  return (
    <div className="py-2 flex justify-end h-full w-full items-center">
      <Button
        sx={{
          borderRadius: 28,
          bgcolor: "success.light",
          textTransform: "capitalize",
          fontSize: 16,
          height: "100%",
        }}
        color="success"
        startIcon={<DiamondIcon />}
        variant="contained"
      >
        Premium
      </Button>
      <NavDrawer />
    </div>
  );
}
