export type TicketType = 't1' | 't2' | 't3' | 't4'

export type TicketNames = Record<TicketType, string>

export type Tickets = Record<TicketType, number>

export type TicketValues = Record<TicketType, number>

export type DungeonReward = Record<TicketType, number>

export type Dungeon = {
  name: string
  reward: DungeonReward
  skipReward: DungeonReward
}

export type EffectiveDungeon = {
  name: string
  reward: DungeonReward
}

export type ExpConfig = {
  tickets: TicketValues
  ticketsName: TicketNames
  dungeons: Record<string, Dungeon>
  expPerCharacter60: number
}

export type GameConfig = {
  id: string
  name: string
  exp: ExpConfig
}