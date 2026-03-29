import { limbusCompany } from "@/games/limbus-company/config";
import { ExpTool } from "@/games/limbus-company/exp/ui/ExpTool";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-10">
      <h1 className="text-2xl font-bold">림버스 경험치 계산기</h1>
      <ExpTool config={limbusCompany.exp} />
    </main>
  )
}
