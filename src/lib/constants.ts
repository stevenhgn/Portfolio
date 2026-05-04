import * as THREE from "three";

export const PLAYER_SPEED = 4.5;
export const PLAYER_SPEED_MOBILE = 3.5;
export const PLAYER_HEIGHT = 1.6;
export const PLAYER_RADIUS = 0.35;

export const CAMERA_OFFSET = new THREE.Vector3(0, 3.6, 6.8);
export const CAMERA_LERP = 0.08;
export const CAMERA_LOOK_OFFSET = new THREE.Vector3(0, 1.5, 0);

export const ROOM_IDS = ["workplaces", "projects", "hobbies"] as const;
export type RoomId = (typeof ROOM_IDS)[number];

export const TELESCOPE_INTERACT_RADIUS = 1.8;
export const TELESCOPE_TWEEN_SECONDS = 1.2;

export const ROOM_DEFINITIONS: Record<
  RoomId,
  {
    label: string;
    color: string;
    accent: string;
    position: [number, number, number];
    available: boolean;
  }
> = {
  workplaces: {
    label: "Workplaces",
    color: "#3a4a6b",
    accent: "#f5c45e",
    position: [-12, 0, -6],
    available: true,
  },
  projects: {
    label: "Projects",
    color: "#4b3a6b",
    accent: "#7ed3b2",
    position: [0, 0, -14],
    available: false,
  },
  hobbies: {
    label: "Hobbies",
    color: "#6b3a4a",
    accent: "#f08a7f",
    position: [12, 0, -6],
    available: false,
  },
};
