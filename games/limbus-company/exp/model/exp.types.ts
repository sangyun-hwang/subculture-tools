export type TicketType = 't1' | 't2' | 't3' | 't4'

export type Tickets = Record<TicketType, number>

export type TicketValues = Record<TicketType, number>

export type Dungeon = {
  name: string
  reward: Partial<Record<TicketType, number>>
}