import { create } from "zustand";
import type { RoomId } from "@/lib/constants";

export type TelescopeMode = "idle" | "zooming" | "viewing" | "unzooming";

type MoveInput = {
  forward: number;
  back: number;
  left: number;
  right: number;
};

type WorldState = {
  activeRoom: RoomId | null;
  nearTelescope: RoomId | null;
  telescopeMode: TelescopeMode;
  mobileInput: MoveInput;
  setActiveRoom: (id: RoomId | null) => void;
  setNearTelescope: (id: RoomId | null) => void;
  setTelescopeMode: (m: TelescopeMode) => void;
  setMobileInput: (input: Partial<MoveInput>) => void;
};

const ZERO_INPUT: MoveInput = { forward: 0, back: 0, left: 0, right: 0 };

export const useWorldStore = create<WorldState>((set) => ({
  activeRoom: null,
  nearTelescope: null,
  telescopeMode: "idle",
  mobileInput: { ...ZERO_INPUT },
  setActiveRoom: (activeRoom) => set({ activeRoom }),
  setNearTelescope: (nearTelescope) => set({ nearTelescope }),
  setTelescopeMode: (telescopeMode) => set({ telescopeMode }),
  setMobileInput: (input) =>
    set((s) => ({ mobileInput: { ...s.mobileInput, ...input } })),
}));
