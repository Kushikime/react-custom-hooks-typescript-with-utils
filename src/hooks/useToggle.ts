import { useState } from 'react';

type useToggleReturnType = [boolean, (val: boolean) => void];

export const useToggle = (defaultValue: boolean): useToggleReturnType => {
  const [toggle, setToggle] = useState(defaultValue);

  const toggleValue = (value?: boolean) => {
    if (value === undefined) {
      setToggle((prev) => !prev);
    } else {
      setToggle(value);
    }
  };

  return [toggle, toggleValue];
};
