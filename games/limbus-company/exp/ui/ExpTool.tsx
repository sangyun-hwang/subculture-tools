'use client'

import { useExpStore } from '../model/exp.store'
import { calculateExpSummary } from '../model/exp.utils'

export function ExpTool({ config }: { config: any }) {
  const { tickets, addDungeonRun, setTicket } = useExpStore()

  const dungeon = config.dungeons.d9

  const summary = calculateExpSummary({
    tickets,
    ticketValues: config.tickets,
    dungeon,
    expPerCharacter: config.expPerCharacter60,
  })

  return (
    <div style={{ padding: 20 }}>
      <h2>던전: {dungeon.name}</h2>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => addDungeonRun(dungeon, 1)}>+1회</button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => addDungeonRun(dungeon, -1)}>-1회</button>

      <div>총 경험치: {summary.totalExp}</div>
      <div className="space-y-2">
        {Object.entries(tickets).map(([type, value]) => (
          <div key={type} className="flex gap-2 items-center">
            <span className="w-10">{type}</span>
            <input
              type="number"
              value={value}
              onChange={(e) =>
                setTicket(type as any, Number(e.target.value))
              }
              className="border px-2 py-1 w-24"
            />
          </div>
        ))}
      </div>
      <div>60레벨 캐릭: {summary.characters}</div>
      <div>다음 캐릭까지 판수: {summary.runsForNext}</div>
    </div >
  )
}