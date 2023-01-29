import React, { FC, useState } from "react";
import { Box, Col, LinkIcon, Row, Text } from "../../atoms";
import { ApiImage } from "../../../services/image/service";
import moment from "moment";
import { convertBytesToMegaBytes } from "../../../utils/convertBytesToMegaBytes";

interface Props {
  image: ApiImage;
}

export const ImageTile: FC<Props> = (props) => {
  const { image } = props;
  const [isActive, toggleActive] = useState(false);
  const size = "15rem";

  return (
    <Box
      height={size}
      width={size}
      borderRadius={5}
      backgroundColor="grey"
      boxShadow={isActive ? "10px 8px 10px #888888" : "5px 4px 5px #888888"}
      style={{ cursor: "pointer" }}
      onMouseEnter={() => toggleActive((prevState) => !prevState)}
      onMouseLeave={() => toggleActive((prevState) => !prevState)}
      onTouchStart={() => toggleActive((prevState) => !prevState)} //TODO check
      position="relative"
      mb="1rem"
    >
      <img
        src={image.src ?? ""}
        style={{
          objectFit: "cover",
          height: size,
          width: size,
          ...(isActive ? { filter: "grayscale(100%)" } : {}),
        }}
        alt=""
      />
      {isActive && (
        <Col
          width={size}
          height={size}
          p="0.5rem 0.8rem 0 0.8rem"
          position="absolute"
          backgroundColor="rgba(0, 0, 0, 0.7)"
          top={0}
          left={0}
          style={{ boxSizing: "border-box" }}
        >
          <Row justifyContent="space-between">
            <Col gap="0" maxWidth="70%">
              <Text
                color="primary"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                overflow="hidden"
                title={image.name}
              >
                {image.name}
              </Text>
              <Text fontSize="0.8rem" color="contrastText" fontWeight={700}>
                {`${convertBytesToMegaBytes(parseInt(image.fileSize))} MB`}
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
                    {moment(image.uploadedAt).format("YYYY.MM.DD HH:mm")}
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
