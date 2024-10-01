import { create } from 'zustand';
import { Members } from '@prisma/client';

interface NumberStoreState {
    numbers: Members[];
    setNumbers: (newNumbers: Members[]) => void;
    resetNumbers: () => void,
    stateReload: boolean,
    setStateReload: (state: boolean) => void
}

const useNumberStore = create<NumberStoreState>((set) => ({
    numbers: [],
    stateReload: true,

    setNumbers: (newNumbers) =>
        set(() => ({
            numbers: [...newNumbers]
        })),
    resetNumbers: () => {
        set(() => ({
            numbers: []
        }))
    },
    setStateReload: (state) =>
        set(() => ({
            stateReload: state
        }))

}));

export default useNumberStore;