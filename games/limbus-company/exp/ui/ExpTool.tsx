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
  const { tickets, addDungeonRun, setTicket, dungeonKey, setDungeon, isSkip, setSkip, reset } = useExpStore()

  const baseDungeon = config.dungeons[dungeonKey]
  const dungeon = getEffectiveDungeon(baseDungeon, isSkip)

  const summary = calculateExpSummary({
    tickets,
    ticketValues: config.tickets,
    dungeon,
    expPerCharacter: config.expPerCharacter60,
  })

  return (
    <div className="min-w-80 max-w-xl mx-auto p-6 space-y-6">
      <div className="flex gap-5 items-center justify-between">
        <select
          name="dungeon"
          value={dungeonKey}
          onChange={(e) => setDungeon(e.target.value)}
          className="border rounded px-4 py-1"
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

      <div className="bg-white shadow rounded-2xl p-6 space-y-3">
        <div className="text-gray-500 text-sm">총 경험치</div>
        <div className="text-2xl font-bold">{summary.totalExp}</div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="text-center">
          <div className="text-gray-400 text-xs">60랩 캐릭</div>
          <div className="text-lg font-semibold">{summary.characters}명</div>
        </div>
        <div className="text-center">
          <div className="text-gray-400 text-xs">다음까지</div>
          <div className="text-lg font-semibold">{summary.runsForNext}판</div>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          className="flex-1 bg-blue-500 text-white py-2 rounded-lg"
          onClick={() => addDungeonRun(dungeon, 1)}>+1</button>
        <button
          className="flex-1 bg-gray-200 py-2 rounded-lg"
          onClick={() => addDungeonRun(dungeon, -1)}>-1</button>
      </div>



      <div className="bg-white shadow rounded-2xl p-4 space-y-2">
        {Object.entries(tickets).map(([type, value]) => (
          <div key={type} className="flex gap-2 items-center justify-between">
            <span className="w-16">{config.ticketsName[type as keyof typeof config.ticketsName]}</span>
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

      <div className="flex gap-2">
        <button
          className="flex-1 bg-gray-200 py-2 rounded-lg"
          onClick={() => reset()}>리셋</button>
      </div>

    </div >
  )
}