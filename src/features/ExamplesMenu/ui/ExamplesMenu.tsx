import { FC } from 'react';
import { examples } from '../model/examplesMenu';
import { Button } from '../../../components/shared/Button/ui/Button';

import styles from './ExamplesMenu.module.scss';
import { useNavigate } from 'react-router-dom';

export const ExamplesMenu: FC = () => {
  const navigator = useNavigate();
  return (
    <div className={styles.examplesMenu}>
      {examples.map((example) => {
        return (
          <Button key={example} onClick={() => navigator('/use-toggle')}>
            {example}
          </Button>
        );
      })}
    </div>
  );
};
