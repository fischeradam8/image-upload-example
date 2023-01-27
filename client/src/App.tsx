import React from "react";
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

function App() {
  const placeholderData = [
    {
      id: "1",
      name: "placeholder1",
      size: "1.21MB",
      width: "1280",
      height: "1200",
      uploadedAt: "2023-01-24",
      uploadedFrom: "192.168.1.1",
      description: "Lorem ipsum...",
    },
    {
      id: "2",
      name: "placeholder2",
      size: "1.22MB",
      width: "1280",
      height: "1200",
      uploadedAt: "2023-01-24",
      uploadedFrom: "192.168.1.1",
      description: "Lorem ipsum 2...",
    },
    {
      id: "3",
      name: "placeholder3",
      size: "1.23MB",
      width: "1280",
      height: "1200",
      uploadedAt: "2023-01-24",
      uploadedFrom: "192.168.1.1",
      description: "Lorem ipsum 3...",
    },
  ];
  return (
    <Container>
      <Col gap={2}>
        {/*TODO move background color to theme*/}
        <Box
          display="flex"
          width="100%"
          height="3.75rem"
          backgroundColor="#c7ea46"
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
              backgroundColor="#c7ea46"
              height="10rem"
              width="10rem"
              borderRadius={5}
              borderColor="black"
              borderWidth={1}
              borderStyle="solid"
            ></Box>
            {placeholderData.map((placeholder) => (
              <ImageTile
                key={`${placeholder.id}-image`}
                image={placeholder}
              ></ImageTile>
            ))}
          </Row>
        </Col>
      </Col>
    </Container>
  );
}

export default App;
