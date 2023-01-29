import React, { FC, useState } from "react";
import { Box, Col, LinkIcon, Row, Text } from "../../atoms";
import { ApiImage } from "../../../services/image/service";
import dayjs from "dayjs";

interface Props {
  image: ApiImage;
}

export const ImageTile: FC<Props> = (props) => {
  const { image } = props;
  const [isActive, toggleActive] = useState(false);

  return (
    <Box
      height="15rem"
      width="15rem"
      borderRadius={5}
      backgroundColor="grey"
      boxShadow={isActive ? "10px 8px 10px #888888" : "5px 4px 5px #888888"}
      style={{ cursor: "pointer" }}
      onMouseEnter={() => toggleActive((prevState) => !prevState)}
      onMouseLeave={() => toggleActive((prevState) => !prevState)}
      position="relative"
      mb="1rem"
    >
      <img
        src={image.src ?? ""}
        style={{
          objectFit: "cover",
          height: "15rem",
          width: "15rem",
          ...(isActive ? { filter: "blur(4px)" } : {}),
          //  TODO blur overflows
        }}
        alt=""
      />
      {isActive && (
        <Col
          width="13.6rem" //TODO check size
          height="14.5rem"
          p="0.5rem 0.8rem 0 0.8rem"
          position="absolute"
          backgroundColor="rgba(0, 0, 0, 0.7)"
          top={0}
          left={0}
        >
          <Row justifyContent="space-between">
            <Col gap="0">
              <Text color="primary">{image.name}</Text>
              <Text fontSize="0.8rem" color="contrastText" fontWeight={700}>
                {image.fileSize}
              </Text>
            </Col>
            <Box
              display="flex"
              onClick={() => navigator.clipboard.writeText(image?.src)}
            >
              <LinkIcon />
            </Box>
          </Row>
          <table style={{ borderSpacing: 0 }}>
            <tbody>
              <tr>
                <td>
                  <Text variant="label">Uploaded:</Text>
                </td>
                <td>
                  <Text fontSize="0.8rem" color="contrastText">
                    {/*TODO fix dates*/}
                    {dayjs(image.uploadedAt).format("YYYY.MM.DD HH:mm")}
                  </Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text variant="label">Size:</Text>
                </td>
                <td>
                  <Text
                    fontSize="0.8rem"
                    color="contrastText"
                  >{`${image.width} x ${image.height}`}</Text>
                </td>
              </tr>
            </tbody>
          </table>
          {image.description && (
            <>
              <Text variant="label">Details</Text>
              <Text variant="description">{image.description}</Text>
            </>
          )}
        </Col>
      )}
    </Box>
  );
};
