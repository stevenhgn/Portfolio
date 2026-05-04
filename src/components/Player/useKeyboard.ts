"use client";

import { useEffect, useRef } from "react";

export type KeyState = {
  forward: boolean;
  back: boolean;
  left: boolean;
  right: boolean;
  interact: boolean;
  cancel: boolean;
};

const initial = (): KeyState => ({
  forward: false,
  back: false,
  left: false,
  right: false,
  interact: false,
  cancel: false,
});

const KEYS_FORWARD = new Set(["w", "W", "ArrowUp"]);
const KEYS_BACK = new Set(["s", "S", "ArrowDown"]);
const KEYS_LEFT = new Set(["a", "A", "ArrowLeft"]);
const KEYS_RIGHT = new Set(["d", "D", "ArrowRight"]);
const KEYS_INTERACT = new Set(["e", "E", "Enter"]);
const KEYS_CANCEL = new Set(["Escape"]);

export function useKeyboard() {
  const ref = useRef<KeyState>(initial());

  useEffect(() => {
    const set = (k: string, v: boolean) => {
      const s = ref.current;
      if (KEYS_FORWARD.has(k)) s.forward = v;
      else if (KEYS_BACK.has(k)) s.back = v;
      else if (KEYS_LEFT.has(k)) s.left = v;
      else if (KEYS_RIGHT.has(k)) s.right = v;
      else if (KEYS_INTERACT.has(k)) s.interact = v;
      else if (KEYS_CANCEL.has(k)) s.cancel = v;
    };
    const onDown = (e: KeyboardEvent) => set(e.key, true);
    const onUp = (e: KeyboardEvent) => set(e.key, false);
    const onBlur = () => {
      ref.current = initial();
    };
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  return ref;
}
