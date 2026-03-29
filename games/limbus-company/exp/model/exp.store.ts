import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { EffectiveDungeon, Tickets } from './exp.types'
import { applyDungeonReward } from './exp.utils'

interface ExpState {
  tickets: Tickets
  dungeonKey: string
  isSkip: boolean
  addDungeonRun: (dungeon: EffectiveDungeon, count?: number) => void
  setTicket: (type: keyof Tickets, value: number) => void
  reset: () => void
  setDungeon: (key: string) => void
  setSkip: (value: boolean) => void
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

      dungeonKey: "d9",
      isSkip: false,

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

      setDungeon: (key) => set({ dungeonKey: key }),

      setSkip: (value) => set({ isSkip: value }),
    }),
    {
      name: 'exp-limbus',
      storage: createJSONStorage(() => localStorage),
    }
  )
)