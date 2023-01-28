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
  Row,
  Text,
  Title,
  UploadTile,
} from "./components";
import theme from "./themes";
import { ThemeProvider } from "styled-components";
import {
  ApiImage,
  FileData,
  getImages,
  uploadImage,
} from "./services/image/service";
import { Field, Form, Formik } from "formik";

function App() {
  const [images, setImages] = useState<undefined | ApiImage[]>();
  const [isModalOpen, setModalOpen] = useState(false);

  const initialValues = {
    file: null,
    description: "",
  };

  //TODO handle errors, prevent loop
  useEffect(() => {
    if (!images) {
      getImages().then((data) => setImages(data as ApiImage[]));
    }
  }, [images]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Col gap={3}>
          <Box
            display="flex"
            width="100%"
            height="3.75rem"
            backgroundColor="primary"
            boxShadow="10px 8px 10px #888888"
          >
            <Box display="flex">
              <Row px="2rem" alignItems="center">
                <Box display="flex">
                  <LimeIcon />
                </Box>
                <Box display="flex">
                  <Title color="neutral" fontWeight={900}>
                    LimeCRM
                  </Title>
                </Box>
              </Row>
            </Box>
          </Box>
          <Col px="2rem" gap={2}>
            <Title color="neutral">Uploaded images</Title>
            <Row gap={2}>
              <UploadTile
                size="15rem"
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
            {/*  TODO add validation */}
            <Formik
              initialValues={initialValues}
              onSubmit={(values: {
                file: FileData | null;
                description?: string;
              }) => {
                uploadImage(values.file, values.description);
              }}
            >
              <Form>
                <Col>
                  <Col>
                    <UploadTile size="7rem" hasInput={true} />
                    <Text color="neutral">Only jpg or png</Text>
                  </Col>
                  <Col gap={0}>
                    <Text color="neutral">Description</Text>
                    {/*TODO use custom textarea if necessary */}
                    <Field name="description" component="textarea" />
                  </Col>
                  <Row>
                    <Text color="neutral">{`By uploading an image, you accept our Terms`}</Text>
                    <Button variant="primary" type="submit">
                      Save
                    </Button>
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
