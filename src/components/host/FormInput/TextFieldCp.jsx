import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const TextFieldCp = ({ field, control, errors, readOnly }) => (
  <Controller
    name={field.name}
    control={control}
    defaultValue={field.defaultValue || ""}
    rules={{
      required: field.required ? `${field.label} là bắt buộc` : false,
      validate: (value) =>
        value.trim() !== "" || `${field.label} không thể chỉ chứa khoảng trắng`,
    }}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <TextField
        fullWidth
        label={field.label}
        type={field.type}
        value={value}
        required={field.required}
        onChange={(e) => {
          onChange(e);
        }}
        error={!!error}
        InputProps={{
          readOnly: field.readOnly || readOnly,
        }}
        helperText={error ? error.message : null}
      />
    )}
  />
);

export default TextFieldCp;
