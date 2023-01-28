import React, { FC } from "react";
import { useField } from "formik";

interface Props {
  name: string;
}

export const FileInput: FC<Props> = (props) => {
  const { name } = props;
  const [, , { setValue }] = useField(name);

  return (
    <input
      name="file"
      accept="image/jpeg, image/png"
      type="file"
      onChange={(event) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          if (fileReader.readyState === 2) {
            setValue(fileReader.result);
          }
        };
        if (event?.target?.files?.[0]) {
          fileReader.readAsDataURL(event.target.files[0]);
        }
      }}
    />
  );
};
