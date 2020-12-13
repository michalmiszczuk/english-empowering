import {useState} from "react";

export default function useToggle(state) {
  const [value, setValue] = useState(state);
}
