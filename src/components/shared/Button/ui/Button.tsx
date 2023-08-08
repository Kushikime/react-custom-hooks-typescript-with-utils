import { FC, HTMLProps } from 'react';

import styles from './Button.module.scss';

interface IButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'type' | 'onClick'> {
  onClick:
    | ((args: any) => void)
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined;
}

export const Button: FC<IButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button
      className={[styles.button, className].join(' ')}
      {...rest}
      type="button"
    >
      {children}
    </button>
  );
};
