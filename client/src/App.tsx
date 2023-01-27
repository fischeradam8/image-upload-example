import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Box,
  Col,
  Container,
  ImageTile,
  LimeIcon,
  Row,
  Title,
} from "./components";
import theme from "./themes";
import { ThemeProvider } from "styled-components";
import { getImages, Image } from "./services/image/service";

function App() {
  const [images, setImages] = useState<undefined | Image[]>();

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
                  <Title m={0}>LimeCRM</Title>
                </Box>
              </Row>
            </Box>
          </Box>
          <Col px="2rem" gap={2}>
            <Title>Uploaded images</Title>
            <Row gap={2}>
              <Box
                backgroundColor="primary"
                height="10rem"
                width="10rem"
                borderRadius={5}
                borderColor="black"
                borderWidth={1}
                borderStyle="solid"
              ></Box>
              {images?.map((image) => (
                <ImageTile key={`${image.id}-image`} image={image}></ImageTile>
              ))}
            </Row>
          </Col>
        </Col>
      </Container>
    </ThemeProvider>
  );
}

export default App;
