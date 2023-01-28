import React, { FC } from "react";
import { Box, PlusIcon } from "../../atoms";
import { FileInput } from "../file-input";

interface Props {
  onClick?: () => void;
  hasInput?: boolean;
}

export const UploadTile: FC<Props> = (props) => {
  const { onClick, hasInput = false } = props;

  return (
    <>
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
        mb="1rem"
      >
        <Box>
          <PlusIcon style={{ width: "3.5rem", height: "3.5rem" }} />
          {hasInput && <FileInput name="file" />}
        </Box>
      </Box>
    </>
  );
};
