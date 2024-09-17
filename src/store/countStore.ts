import { create } from 'zustand';

interface Counter {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useCounter = create<Counter>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 }))
}));

export default useCounter;
