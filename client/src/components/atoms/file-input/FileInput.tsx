import React, {
  Dispatch,
  FC,
  MutableRefObject,
  SetStateAction,
  useEffect,
} from "react";
import { useField } from "formik";

interface Props {
  name: string;
  onSetInputRef?: Dispatch<SetStateAction<MutableRefObject<any> | undefined>>;
}

export const FileInput: FC<Props> = (props) => {
  const { name, onSetInputRef } = props;
  const [, , { setValue }] = useField(name);
  const inputRef = React.useRef(null);

  useEffect(() => {
    if (onSetInputRef) {
      onSetInputRef(inputRef);
    }
  }, [onSetInputRef, inputRef]);

  return (
    <input
      ref={inputRef}
      name="file"
      accept="image/jpeg, image/png"
      type="file"
      hidden
      onChange={(event) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          if (fileReader.readyState === 2 && event?.target?.files?.[0]) {
            if (typeof fileReader.result === "string") {
              const image = new Image();
              image.src = fileReader.result;
              setValue({
                src: fileReader.result,
                file: event.target.files[0],
                size: {
                  width: image.naturalWidth,
                  height: image.naturalHeight,
                },
              });
            }
          }
        };
        if (event?.target?.files?.[0]) {
          fileReader.readAsDataURL(event.target.files[0]);
        }
      }}
    />
  );
};
