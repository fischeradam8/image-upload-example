import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Box,
  Col,
  Container,
  ImageTile,
  LimeIcon,
  Modal,
  PlusIcon,
  Row,
  Title,
} from "./components";
import theme from "./themes";
import { ThemeProvider } from "styled-components";
import { getImages, Image } from "./services/image/service";

function App() {
  const [images, setImages] = useState<undefined | Image[]>();
  const [isModalOpen, setModalOpen] = useState(false);

  //TODO handle errors, prevent loop
  useEffect(() => {
    if (!images) {
      getImages().then((data) => setImages(data as Image[]));
    }
  }, [images]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Col gap={2}>
          <Box
            display="flex"
            width="100%"
            height="3.75rem"
            backgroundColor="primary"
          >
            <Box display="flex">
              <Row px="2rem" alignItems="center">
                <Box display="flex">
                  <LimeIcon />
                </Box>
                <Box display="flex">
                  <Title>LimeCRM</Title>
                </Box>
              </Row>
            </Box>
          </Box>
          <Col px="2rem" gap={2}>
            <Title>Uploaded images</Title>
            <Row gap={2}>
              <Box
                display="flex"
                backgroundColor="primary"
                height="10rem"
                width="10rem"
                borderRadius={5}
                borderColor="black"
                borderWidth={1}
                borderStyle="solid"
                onClick={() => setModalOpen((prevState) => !prevState)}
                style={{ cursor: "pointer" }}
                alignItems="center"
                justifyContent="center"
              >
                <Box>
                  <PlusIcon style={{ width: "3.5rem", height: "3.5rem" }} />
                </Box>
              </Box>
              {images?.map((image) => (
                <ImageTile key={`${image.id}-image`} image={image}></ImageTile>
              ))}
            </Row>
          </Col>
        </Col>
        {isModalOpen && (
          <Modal
            title="New Image"
            onClose={() => setModalOpen((prevState) => !prevState)}
          >
            <Box>Hello</Box>
          </Modal>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
