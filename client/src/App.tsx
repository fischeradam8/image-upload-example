import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Box,
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
import { Field, useFormik } from "formik";
import * as yup from "yup";

function App() {
  const [images, setImages] = useState<undefined | ApiImage[]>();
  const [isModalOpen, setModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      file: null,
      description: "",
    },
    validationSchema: yup.object().shape({
      file: yup.object().shape({
        src: yup.string().required(),
      }),
      description: yup.string().nullable(),
    }),
    onSubmit: (values: { file: FileData | null; description?: string }) => {
      //TODO add react-query to update cache instead
      uploadImage(values.file, values.description)?.then(() =>
        getImages().then((imageData) => {
          setImages(imageData);
          setModalOpen((prevState) => !prevState);
        })
      );
      //TODO
      formik.resetForm();
    },
  });

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
            form={formik}
            onClose={() => setModalOpen((prevState) => !prevState)}
          >
            <Col gap={3}>
              <Col gap="0">
                <UploadTile size="7rem" hasInput={true} />
                <Text color="neutral">Only jpg or png</Text>
              </Col>
              <Col gap="0">
                <Text color="neutral" fontWeight={700}>
                  Description
                </Text>
                <Box maxWidth="75%" height="10rem">
                  <Field
                    name="description"
                    component="textarea"
                    style={{ resize: "none" }}
                    rows={4}
                    cols={40}
                  />
                </Box>
              </Col>
            </Col>
          </Modal>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
