import { Button } from '../../components/shared/Button/ui/Button';
import { useToggle } from '../../hooks/useToggle';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './UseTogglePage.module.scss';

export const UseTogglePage = () => {
  const [modalOpened, toggleModal] = useToggle(false);

  return (
    <div className={styles.useTogglePage}>
      <Button onClick={toggleModal}>Toggle modal</Button>

      <AnimatePresence>
        {modalOpened && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1>Modal title</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              quaerat quia mollitia, magni sunt perspiciatis quae maiores quos
              inventore autem iste numquam nemo accusantium, nulla officiis?
              Necessitatibus culpa voluptatibus sit? Vero aut quas inventore
              dignissimos voluptates laborum ullam ipsa, eligendi aspernatur
              totam mollitia voluptatibus expedita assumenda, officiis, ratione
              quo suscipit voluptatum? Exercitationem fugiat, itaque consequatur
              maiores aliquam excepturi rem facilis. Amet obcaecati nulla,
              beatae iste excepturi fugit. Reiciendis, itaque. Obcaecati
              officiis voluptatem soluta assumenda totam repellat eveniet
              aliquid labore voluptate fugiat, beatae vel, quam optio modi
              mollitia nihil ut consectetur. Modi ad distinctio, architecto ut
              placeat, sunt iste necessitatibus maiores quas dignissimos nulla
              vitae blanditiis? Ullam aspernatur tempore, nihil fugit facilis ea
              omnis dignissimos. Accusamus cum eveniet id asperiores tempore.
            </p>
            <Button onClick={toggleModal}>Toggle modal</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
