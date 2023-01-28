import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Col,
  Container,
  ImageTile,
  LimeIcon,
  Modal,
  Paragraph,
  Row,
  TextArea,
  Title,
} from "./components";
import theme from "./themes";
import { ThemeProvider } from "styled-components";
import { getImages, Image } from "./services/image/service";
import { Field, Form, Formik } from "formik";

function App() {
  const [images, setImages] = useState<undefined | Image[]>();
  const [isModalOpen, setModalOpen] = useState(false);

  const initialValues = {
    file: null,
    description: "",
  };

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
              <ImageTile
                onClick={() => setModalOpen((prevState) => !prevState)}
              />
              {images?.map((image) => (
                <ImageTile key={`${image.id}-image`} image={image} />
              ))}
            </Row>
          </Col>
        </Col>
        {isModalOpen && (
          <Modal
            title="New Image"
            onClose={() => setModalOpen((prevState) => !prevState)}
          >
            <Formik initialValues={initialValues} onSubmit={() => {}}>
              <Form>
                <Col>
                  <Col>
                    <ImageTile hasInput={true} />
                    <Paragraph>Only jpg or png</Paragraph>
                  </Col>
                  <Col gap={0}>
                    <Paragraph>Description</Paragraph>
                    {/*TODO use custom textarea if necessary */}
                    <Field name="description" component="textarea" />
                  </Col>
                  <Row>
                    <Paragraph>{`By uploading an image, you accept our Terms`}</Paragraph>
                    <Button variant="primary" type="submit">Save</Button>
                  </Row>
                </Col>
              </Form>
            </Formik>
          </Modal>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
