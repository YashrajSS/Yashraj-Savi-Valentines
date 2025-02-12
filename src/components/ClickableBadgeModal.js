import { useState } from "react";
import { Badge, Modal, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import InboxIcon from "@mui/icons-material/Inbox";
import { Input } from "@mui/icons-material";
import PinInput from "./PinInput";

export default function ClickableBadgeModal() {
  const [open, setOpen] = useState(false);

  // Function to toggle modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Clickable Animated Icon with Badge */}
      <motion.div
        whileTap={{ scale: 0.8 }} // Shrinks on click
        whileHover={{ scale: 1.1 }} // Slightly enlarges on hover
        onClick={handleOpen}
        style={{ cursor: "pointer", display: "inline-block" }}
      >
        <Badge
          badgeContent={1}
          sx={{
            "& .MuiBadge-badge": {
                backgroundColor: "black", // Change badge background
                color: "white",
                fontSize:20 ,// Change badge text color
                width: "30px",
                height:"30px",
                borderRadius:"50%",
            },
          }}
        >
          <InboxIcon fontSize="large" sx={{fontSize:80, color:"black", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"}}/>
        </Badge>
      </motion.div>

      {/* Animated Modal */}
      <Modal open={open} onClose={handleClose}>
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Start hidden and slightly above
          animate={{ opacity: 1, y: 0 }} // Fade in and move down
          exit={{ opacity: 0, y: -50 }} // Fade out when closing
          transition={{ duration: 0.3 }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 500,
              height:300,
              bgcolor: "black",
              borderRadius: "15px", // Rounded corners
              boxShadow: 24,
              p: 3,
              textAlign: "center",
              alignItems:"center"
            }}
          >
            <Typography variant="h6" sx={{color:"yellowgreen"}}>Enter Password to proceed!</Typography>
            <PinInput />
          </Box>
        </motion.div>
      </Modal>
    </>
  );
}
