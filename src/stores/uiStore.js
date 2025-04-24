import { create } from 'zustand'

export const createUIStore = (init = {}) => create((set) => ({
    dark: init.dark ?? false,
    toggleDark: () => set((s) => ({ dark: !s.dark })),
}))
