import { create } from 'zustand'

export const createUserStore = (init = {}) => create((set) => ({
    user: init.user || null,
    setUser: (user) => set({ user }),
    logout: () => set({ user: null }),
}))
