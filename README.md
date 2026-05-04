# Portfolio

Interactive 3D portfolio. Walk a low-poly character around a hub world, enter themed rooms, and look through each room's telescope to see the deep-dive content.

## Stack

- Next.js 15 (App Router) + TypeScript
- react-three-fiber + drei + rapier (physics)
- @react-three/postprocessing (DoF/bloom on telescope zoom)
- Zustand for world state
- gsap for camera tweens
- nipplejs for mobile joystick

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Controls

- **Desktop**: WASD or arrow keys to move. `E` to interact with the telescope. `Esc` to exit.
- **Mobile**: virtual joystick (left), Interact / Back buttons (right).
