import { limbusCompany } from "@/games/limbus-company/config";
import { ExpTool } from "@/games/limbus-company/exp/ui/ExpTool";

export default function Home() {
  return (
    <main>
      <h1>림버스 경험치 계산기</h1>
      <ExpTool config={limbusCompany.exp} />
    </main>
  )
}
