import { useController, useFormContext } from 'react-hook-form';

import { Switch, type SwitchProps } from '~/components/atoms/Switch';

type ControlledSwitchProps<FormSchema> = {
  name: string & keyof FormSchema;
} & Partial<SwitchProps>;

export const ControlledSwitch = <FormSchema,>(
  props: ControlledSwitchProps<FormSchema>
) => {
  const { control } = useFormContext();
  const { field } = useController({ name: props.name, control });

  return <Switch {...{ ...field, ref: null }} checked={field.value} />;
};
