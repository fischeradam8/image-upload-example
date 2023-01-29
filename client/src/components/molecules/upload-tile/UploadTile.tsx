import React, { FC, MutableRefObject, useCallback, useState } from "react";
import { Box, FileInput, PlusIcon } from "../../atoms";

interface Props {
  onClick?: () => void;
  size: string;
  hasInput?: boolean;
}

export const UploadTile: FC<Props> = (props) => {
  const { onClick, size, hasInput = false } = props;
  const [inputRef, setInputRef] = useState<MutableRefObject<any> | undefined>();

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
    if (inputRef) {
      inputRef.current.click();
    }
  }, [onClick, inputRef]);

  return (
    <>
      <Box
        display="flex"
        backgroundColor="primary"
        height={size}
        width={size}
        borderRadius={5}
        borderColor="black"
        borderWidth={1}
        borderStyle="solid"
        style={{ cursor: "pointer" }}
        alignItems="center"
        justifyContent="center"
        onClick={handleClick}
        mb="1rem"
      >
        <Box>
          <PlusIcon style={{ width: "3.5rem", height: "3.5rem" }} />
          {hasInput && <FileInput name="file" onSetInputRef={setInputRef} />}
        </Box>
      </Box>
    </>
  );
};
