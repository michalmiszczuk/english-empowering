import {useState} from "react";

export default function useToggle(state) {
  const [value, setValue] = useState(state);

  const toggleValue = () => setValue(!value);

  return [value, toggleValue];
}
