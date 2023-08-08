import { Button } from '../../components/shared/Button/ui/Button';
import { useToggle } from '../../hooks/useToggle';

export const UseTogglePage = () => {
  const [modalOpened, toggleModal] = useToggle(false);

  return (
    <div>
      <Button onClick={toggleModal}>Toggle modal</Button>

      {modalOpened && <div>Modal opened</div>}
    </div>
  );
};
