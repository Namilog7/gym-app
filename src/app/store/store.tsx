import { create } from 'zustand';
import { Members } from '@prisma/client';

interface NumberStoreState {
    numbers: Members[];
    setNumbers: (newNumbers: Members[]) => void;
}

const useNumberStore = create<NumberStoreState>((set) => ({
    numbers: [],

    setNumbers: (newNumbers) =>
        set(() => ({
            numbers: [...newNumbers]
        })),
}));

export default useNumberStore;