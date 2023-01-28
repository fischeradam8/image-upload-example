import React, { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Box, Col } from "../../atoms";

interface Props {
  children?: ReactNode;
  onClose: () => void;
}

export const Modal: FC<Props> = (props) => {
  const { children, onClose } = props;

  return createPortal(
    <Box
      position="absolute"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={999}
      bg="rgba(0, 0, 0, 0.4)"
    >
      <Box display="flex" width="50%" height="50%" backgroundColor="white">
        <Col>
          <Box onClick={onClose}>X</Box>
        </Col>
        {children}
      </Box>
    </Box>,
    document.getElementById("modal-root") || document.createElement("div")
  );
};
