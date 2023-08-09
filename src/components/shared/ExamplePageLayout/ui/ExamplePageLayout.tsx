import { FC, PropsWithChildren } from 'react';

import BackIcon from '/back.svg';

import { IconButton } from '../../IconButton/ui/IconButton';
import { useNavigate } from 'react-router-dom';

import styles from './ExamplePageLayout.module.scss';

export const ExamplePageLayout: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.examplePageLayout}>
      <div className={styles.header}>
        <IconButton
          text="Go back"
          icon={BackIcon}
          onClick={() => navigate(-1)}
        />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
