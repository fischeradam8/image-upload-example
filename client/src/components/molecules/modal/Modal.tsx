import React, { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Box, Button, Col, Link, Row, Text, Title } from "../../atoms";

interface Props {
  children?: ReactNode;
  title: string;
  onClose: () => void;
  onSubmit: () => void;
}

export const Modal: FC<Props> = (props) => {
  const { children, title, onClose, onSubmit } = props;

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
      <Box display="flex" maxWidth={700} height="70%" backgroundColor="white">
        <Col p="1rem" justifyContent="space-between" height="90%%" width="100%">
          <Col>
            <Row justifyContent="space-between" alignItems="center">
              <Box display="flex">
                <Title>{title}</Title>
              </Box>
              <Box display="flex" height="1rem" width="1rem">
                <Button onClick={onClose} variant="ghost">
                  <Text>X</Text>
                </Button>
              </Box>
            </Row>
            {children}
          </Col>
          <Row justifyContent="space-between">
            <Row gap="0.5">
              <Text color="neutral">By uploading an image, you accept our</Text>
              <Link fontWeight={700} href="" target="_blank">
                Terms
              </Link>
            </Row>
            <Button variant="primary" onClick={onSubmit}>
              Save
            </Button>
          </Row>
        </Col>
      </Box>
    </Box>,
    document.getElementById("modal-root") || document.createElement("div")
  );
};
