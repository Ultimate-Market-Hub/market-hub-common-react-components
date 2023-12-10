import { useController, useFormContext } from 'react-hook-form';

import {
  Listbox,
  type ListboxProps,
  type MultiListboxProps,
} from '../atoms/Listbox';

type ControlledListBoxProps<FormSchema> =
  | (ListboxProps & { name: keyof FormSchema })
  | (MultiListboxProps & { name: keyof FormSchema });

export const ControlledListbox = <FormSchema,>(
  props: ControlledListBoxProps<FormSchema>
) => {
  const { control } = useFormContext();
  const { field } = useController({ name: props.name, control });

  return <Listbox {...props} {...field} />;
};
