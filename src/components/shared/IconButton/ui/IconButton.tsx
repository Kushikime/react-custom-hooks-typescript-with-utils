import { FC, HTMLProps } from 'react';

import styles from './IconButton.module.scss';

interface IconButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'type' | 'onClick'> {
  onClick:
    | ((args: any) => void)
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined;
  icon?: string;
  text?: string;
}

export const IconButton: FC<IconButtonProps> = ({
  children,
  className,
  icon,
  text,
  ...rest
}) => {
  return (
    <button
      className={[styles.iconButton, className].join(' ')}
      {...rest}
      type="button"
    >
      <div>
        <img src={icon} />
      </div>
      {text}
    </button>
  );
};
