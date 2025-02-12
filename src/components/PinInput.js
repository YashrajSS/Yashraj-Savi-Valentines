import { useState, useRef } from "react";
import { TextField, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 

export default function PinInput() {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();  // Initialize navigate

  // Create references for each input field
  const inputRefs = useRef([]);

  // Handle change for each input box and move to next automatically
  const handleChange = (e, index) => {
    const newPin = [...pin];
    newPin[index] = e.target.value;
    setPin(newPin);

    // Move to next input automatically when a value is entered
    if (e.target.value !== "" && index < pin.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Updated submit handler to handle form submission
  const handleSubmitPin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const enteredPin = pin.join("");  // Join pin array to a single string

    if (enteredPin === "1031") {
      // Redirect to new page if PIN is correct
      navigate("/WillYouBeMyValentine");  // Adjust this path to your desired route
    } else {
      handleIncorrectPin(); // Trigger shake if PIN is incorrect
    }
  };

  // Function to trigger shake animation and clear PIN if incorrect
  const handleIncorrectPin = () => {
    setShake(true); // Trigger shake animation
    setPin(["", "", "", ""]); // Clear PIN after shake
    setTimeout(() => {
      setShake(false); // Reset shake state
    }, 500); // Duration of shake animation
  };

  return (
    <Box sx={{ textAlign: "center", marginTop: 5 }}>
      {/* Wrap inputs and button inside a form */}
      <form onSubmit={handleSubmitPin}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {pin.map((digit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: shake ? [10, -20, 10, -10, 10, 0] : 0, // Combine shake animation with opacity
              }}
              transition={{ type: "spring", stiffness: 500, damping: 20, delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }} // Separate animation for tap
            >
              <TextField
                value={digit}
                onChange={(e) => handleChange(e, index)}
                inputProps={{
                  maxLength: 1,
                  style: {
                    textAlign: "center",
                    fontSize: "1.5rem",
                    width: "40px",
                    height: "50px",
                    borderRadius: "8px",
                    backgroundColor: "whitesmoke",
                  },
                }}
                variant="outlined"
                inputRef={(el) => inputRefs.current[index] = el} // Assign ref to input
              />
            </motion.div>
          ))}
        </Box>

        <Typography color="error" sx={{ paddingTop: "20px" }}>
          Hint: The day it all became possible?
        </Typography>

        <Box sx={{ paddingTop:"20px" }}>
          <button type="submit">Submit PIN</button>
        </Box>
      </form>
    </Box>
  );
}
