import { FC, useState } from "react";
import { Box, Col, Paragraph, Row } from "../../atoms";

//TODO move to service once initialized
interface Image {
  id: string;
  name: string;
  size: string;
  width: string;
  height: string;
  uploadedAt: string;
  uploadedFrom: string;
  description?: string;
}

interface Props {
  image: Image;
}

export const ImageTile: FC<Props> = (props) => {
  const { image } = props;
  const [isActive, toggleActive] = useState(false);

  return (
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
  );
};
