import { Tickets, TicketValues, Dungeon, TicketType, EffectiveDungeon } from './exp.types'

export function calculateTotalExp(
  tickets: Tickets,
  ticketValues: TicketValues
) {
  return Object.entries(tickets).reduce((acc, [type, count]) => {
    const value = ticketValues[type as TicketType] ?? 0
    return acc + value * count
  }, 0)
}

export function calculateCharacters(
  totalExp: number,
  expPerCharacter: number
) {
  return Math.round(totalExp / expPerCharacter * 10) / 10
}

export function calculateRemainExp(
  totalExp: number,
  expPerCharacter: number
) {
  return totalExp % expPerCharacter
}

export function calculateExpPerRun(
  dungeon: EffectiveDungeon,
  ticketValues: TicketValues
) {
  return Object.entries(dungeon.reward).reduce((acc, [type, count]) => {
    const value = ticketValues[type as TicketType] ?? 0
    return acc + value * (count ?? 0)
  }, 0)
}

export function calculateRunsForNextCharacter(
  remainExp: number,
  dungeon: EffectiveDungeon,
  ticketValues: TicketValues,
  expPerCharacter: number
) {
  const expPerRun = calculateExpPerRun(dungeon, ticketValues)

  if (expPerRun === 0) return Infinity

  return Math.ceil((expPerCharacter - remainExp) / expPerRun)
}

export function applyDungeonReward(
  tickets: Tickets,
  dungeon: EffectiveDungeon,
  count: number = 1
): Tickets {
  const newTickets = { ...tickets }

  Object.entries(dungeon.reward).forEach(([type, amount]) => {
    const key = type as TicketType
    newTickets[key] += (amount ?? 0) * count
  })

  return newTickets
}

export function calculateExpSummary({
  tickets,
  ticketValues,
  dungeon,
  expPerCharacter,
}: {
  tickets: Tickets
  ticketValues: TicketValues
  dungeon: EffectiveDungeon
  expPerCharacter: number
}) {
  const totalExp = calculateTotalExp(tickets, ticketValues)
  const characters = calculateCharacters(totalExp, expPerCharacter)
  const remainExp = calculateRemainExp(totalExp, expPerCharacter)
  const runsForNext = calculateRunsForNextCharacter(
    remainExp,
    dungeon,
    ticketValues,
    expPerCharacter
  )

  return {
    totalExp,
    characters,
    remainExp,
    runsForNext,
  }
}