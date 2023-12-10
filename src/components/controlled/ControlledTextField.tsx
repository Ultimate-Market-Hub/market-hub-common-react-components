import { useController, useFormContext } from 'react-hook-form';
import { TextField, type TextFieldProps } from 'components/atoms/TextField';

interface ControlledTextFieldProps extends TextFieldProps {
  name: string;
}

export const ControlledTextField = (props: ControlledTextFieldProps) => {
  const { control } = useFormContext();
  const { field } = useController({ name: props.name, control });

  return <TextField {...field} {...props} />;
};
