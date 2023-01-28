import React, { FC, useState } from "react";
import { Box, Col, LinkIcon, PlusIcon, Row, Text } from "../../atoms";
import { ApiImage } from "../../../services/image/service";
import { FileInput } from "../file-input";
import dayjs from "dayjs";

interface Props {
  image?: ApiImage;
  onClick?: () => void;
  hasInput?: boolean;
}

export const ImageTile: FC<Props> = (props) => {
  const { image, onClick, hasInput = false } = props;
  const [isActive, toggleActive] = useState(false);

  return (
    <>
      {image && (
        <Box
          height="15rem"
          width="15rem"
          borderRadius={5}
          backgroundColor="grey"
          boxShadow="0.5rem 0.5rem lightgray"
          style={{ cursor: "pointer" }}
          onMouseEnter={() => toggleActive((prevState) => !prevState)}
          onMouseLeave={() => toggleActive((prevState) => !prevState)}
          position="relative"
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
              p="0.5rem 0.8rem 0 0.8rem"
              position="absolute"
              backgroundColor="rgba(0, 0, 0, 0.7)"
              top={0}
              left={0}
            >
              <Row justifyContent="space-between">
                <Col gap="0">
                  <Text color="primary">{image.name}</Text>
                  <Text fontSize="0.8rem" color="white" fontWeight={700}>
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
                      <Text fontSize="0.8rem" color="primary" fontWeight={700}>
                        Uploaded:
                      </Text>
                    </td>
                    <td>
                      <Text fontSize="0.8rem" color="white">
                        {dayjs(image.uploadedAt).format("YYYY.MM.DD HH:mm")}
                      </Text>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Text fontSize="0.8rem" color="primary" fontWeight={700}>
                        Size:
                      </Text>
                    </td>
                    <td>
                      <Text
                        fontSize="0.8rem"
                        color="white"
                      >{`${image.width} x ${image.height}`}</Text>
                    </td>
                  </tr>
                </tbody>
              </table>
              {image.description && (
                <>
                  <Text fontSize="0.8rem" color="primary">
                    Details
                  </Text>
                  <Text
                    display="-webkit-box"
                    fontSize="0.8rem"
                    color="white"
                    overflow="hidden"
                    style={{ lineClamp: 5, boxOrient: "vertical" }} //TODO fix
                    maxWidth="15rem"
                  >
                    {image.description}
                  </Text>
                </>
              )}
            </Col>
          )}
        </Box>
      )}
      {!image && (
        <Box
          display="flex"
          backgroundColor="primary"
          height="15rem"
          width="15rem"
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
            {hasInput && <FileInput name="file" />}
          </Box>
        </Box>
      )}
    </>
  );
};
