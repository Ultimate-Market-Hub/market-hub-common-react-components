import { Link } from 'react-router-dom';

import { Button, type ButtonProps } from '~/components/atoms/Button';

type LinkButtonProps = Omit<ButtonProps<typeof Link>, 'as'>;

export const LinkButton = (props: LinkButtonProps) => (
  <Button {...props} as={Link} />
);
