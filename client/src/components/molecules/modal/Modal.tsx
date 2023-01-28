import React, { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Box, Button, Col, Row, Title } from "../../atoms";

interface Props {
  children?: ReactNode;
  title: string;
  onClose: () => void;
}

export const Modal: FC<Props> = (props) => {
  const { children, title, onClose } = props;

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
        <Col p="0.5rem" width="100%">
          <Row justifyContent="space-between" alignItems="center">
            <Box display="flex">
              <Title>{title}</Title>
            </Box>
            <Box display="flex" height="1rem" width="1rem">
              <Button onClick={onClose} variant="ghost">
                X
              </Button>
            </Box>
          </Row>
          {children}
        </Col>
      </Box>
    </Box>,
    document.getElementById("modal-root") || document.createElement("div")
  );
};
