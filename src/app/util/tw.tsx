import { createTw } from 'react-pdf-tailwind';

export const tw = createTw({
  theme: {
    extend: {
      fontSize: {
        xs: '0.65rem',
      },
    },
  },
});