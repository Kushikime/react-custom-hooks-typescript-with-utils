import { useState } from 'react';

type useToggleReturnType = [boolean, (val: boolean) => void];

export const useToggle = (defaultValue: boolean): useToggleReturnType => {
  const [toggle, setToggle] = useState(defaultValue);

  const toggleValue = (value?: boolean) => {
    // added a check for a bool, to let this use just like this:  <button onClick={toggle} />
    if (value === undefined || typeof value !== 'boolean') {
      setToggle((prev) => !prev);
    } else {
      setToggle(value);
    }
  };

  return [toggle, toggleValue];
};
