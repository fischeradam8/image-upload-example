import React, { FC, useState } from "react";
import { Box, Col, Paragraph, PlusIcon, Row } from "../../atoms";
import { Image } from "../../../services/image/service";

interface Props {
  image?: Image;
  onClick?: () => void;
}

export const ImageTile: FC<Props> = (props) => {
  const { image, onClick } = props;
  const [isActive, toggleActive] = useState(false);

  return (
    <>
      {image && (
        <Box
          height="10rem"
          width="10rem"
          borderRadius={5}
          backgroundColor="grey"
          boxShadow="0.5rem 0.5rem lightgray"
          style={{ cursor: "pointer" }}
          onMouseEnter={() => toggleActive((prevState) => !prevState)}
          onMouseLeave={() => toggleActive((prevState) => !prevState)}
        >
          {isActive && (
            <Row>
              <Col p="0.5rem">
                <Paragraph fontSize="0.5rem" color="primary">
                  {image.name}
                </Paragraph>
                <Paragraph fontSize="0.5rem">{image.size}</Paragraph>
                <Paragraph
                  fontSize="0.5rem"
                  color="primary"
                >{`Uploaded: ${image.uploadedAt}`}</Paragraph>
                <Paragraph
                  fontSize="0.5rem"
                  color="primary"
                >{`Size: ${image.width}x${image.height}`}</Paragraph>
                {image.description && (
                  <>
                    <Paragraph fontSize="0.5rem" color="primary">
                      Details
                    </Paragraph>
                    <Paragraph fontSize="0.5rem">{image.description}</Paragraph>
                  </>
                )}
              </Col>
            </Row>
          )}
        </Box>
      )}
      {!image && (
        <Box
          display="flex"
          backgroundColor="primary"
          height="10rem"
          width="10rem"
          borderRadius={5}
          borderColor="black"
          borderWidth={1}
          borderStyle="solid"
          style={{ cursor: "pointer" }}
          alignItems="center"
          justifyContent="center"
          onClick={onClick}
        >
          <Box>
            <PlusIcon style={{ width: "3.5rem", height: "3.5rem" }} />
          </Box>
        </Box>
      )}
    </>
  );
};
