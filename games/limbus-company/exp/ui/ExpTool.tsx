'use client'

import { useExpStore } from '../model/exp.store'
import { Dungeon, EffectiveDungeon, ExpConfig } from '../model/exp.types'
import { calculateExpSummary } from '../model/exp.utils'

function getEffectiveDungeon(dungeon: Dungeon, isSkip: boolean): EffectiveDungeon {
  return {
    name: dungeon.name,
    reward: isSkip ? dungeon.skipReward : dungeon.reward,
  }
}

export function ExpTool({ config }: { config: ExpConfig }) {
  const { tickets, addDungeonRun, setTicket, dungeonKey, setDungeon, isSkip, setSkip } = useExpStore()

  const baseDungeon = config.dungeons[dungeonKey]
  const dungeon = getEffectiveDungeon(baseDungeon, isSkip)

  const summary = calculateExpSummary({
    tickets,
    ticketValues: config.tickets,
    dungeon,
    expPerCharacter: config.expPerCharacter60,
  })

  return (
    <div style={{ padding: 20 }}>
      <div className="flex gap-2 items-center mb-4">
        <select
          name="dungeon"
          value={dungeonKey}
          onChange={(e) => setDungeon(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          {Object.entries(config.dungeons).map(([key, dungeon]) => (
            <option key={key} value={key}>
              {dungeon.name}
            </option>
          ))}
        </select>

        {/* 🔥 스킵 체크박스 */}
        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            checked={isSkip}
            onChange={(e) => setSkip(e.target.checked)}
          />
          스킵
        </label>
      </div>
      <div className="flex gap-2 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => addDungeonRun(dungeon, 1)}>+1회</button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => addDungeonRun(dungeon, -1)}>-1회</button>
      </div>


      <div>총 경험치: {summary.totalExp}</div>
      <div className="space-y-1">
        {Object.entries(tickets).map(([type, value]) => (
          <div key={type} className="flex gap-2 items-center">
            <span className="w-12">{config.ticketsName[type as keyof typeof config.ticketsName]}</span>
            <input
              type="number"
              value={value}
              onChange={(e) =>
                setTicket(type as any, Number(e.target.value))
              }
              className="border px-2 py-1 w-24 rounded"
            />
          </div>
        ))}
      </div>
      <div>60랩 캐릭: {summary.characters}명</div>
    </div >
  )
}