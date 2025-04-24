import { create } from 'zustand'

export const createCartStore = (init = {}) => create((set, get) => ({
        items: init.items || [],
        addItem: (item) => set((s) => ({ items: [...s.items, item] })),
        removeItem: (id) => set((s) => ({ items: s.items.filter(i => i.id !== id) })),
        clearCart: () => set({ items: [] }),
        totalPrice: () => get().items.reduce((sum, i) => sum + (i.price ?? 0), 0)
}))
