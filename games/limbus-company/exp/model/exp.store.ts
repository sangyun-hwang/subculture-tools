import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Dungeon, Tickets } from './exp.types'
import { applyDungeonReward } from './exp.utils'

interface ExpState {
  tickets: Tickets
  addDungeonRun: (dungeon: Dungeon, count?: number) => void
  setTicket: (type: keyof Tickets, value: number) => void
  reset: () => void
}

export const useExpStore = create<ExpState>()(
  persist(
    (set, get) => ({
      tickets: {
        t1: 0,
        t2: 0,
        t3: 0,
        t4: 0,
      },

      addDungeonRun: (dungeon, count = 1) => {
        const newTickets = applyDungeonReward(
          get().tickets,
          dungeon,
          count
        )

        set({ tickets: newTickets })
      },

      setTicket: (type, value) =>
        set((state) => ({
          tickets: {
            ...state.tickets,
            [type]: value,
          },
        })),

      reset: () =>
        set({
          tickets: { t1: 0, t2: 0, t3: 0, t4: 0 },
        }),
    }),
    {
      name: 'exp-limbus',
      storage: createJSONStorage(() => localStorage),
    }
  )
)