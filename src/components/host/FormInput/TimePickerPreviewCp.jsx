import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";
import "dayjs/locale/vi";

const TimePickerPreviewCp = ({ field, control, errors }) => (
  <Controller
    name={field.name}
    control={control}
    defaultValue=""
    rules={{ required: field.required }}
    render={({ field: { onChange, value, ref } }) => (
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="vi">
        <TimePicker
          value={value ? dayjs(value, "HH:mm") : null}
          onChange={(newValue) => {
            onChange(newValue ? newValue.format("HH:mm") : "");
          }}
          slots={{
            textField: TextField,
          }}
          required={field.required}
          slotProps={{
            textField: {
              label: field.label,
              fullWidth: true,
              error: !!errors[field.name],
              helperText: errors[field.name]?.message,
            },
          }}
          inputRef={ref}
        />
      </LocalizationProvider>
    )}
  />
);

export default TimePickerPreviewCp;
