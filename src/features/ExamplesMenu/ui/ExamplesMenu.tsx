import { FC } from 'react';
import { examples } from '../model/examplesMenu';
import { Button } from '../../../components/shared/Button/ui/Button';

import styles from './ExamplesMenu.module.scss';

export const ExamplesMenu: FC = () => {
  return (
    <div className={styles.examplesMenu}>
      {examples.map((example) => {
        return (
          <Button onClick={() => console.log('OPENING: ', example)}>
            {example}
          </Button>
        );
      })}
    </div>
  );
};
