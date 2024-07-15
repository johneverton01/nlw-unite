import { Search } from 'lucide-react'

export function AttendeeList() {
  return (
    <div className="flex items-center gap-3">
      <h1 className="text-2xl font-bold">Participantes</h1>
      <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex gap-3 items-center">
        <Search className="size-4 text-emerald-300" />
        <input
          className="flex-1 bg-transparent outline-none"
          placeholder="Buscar participante..."
          type="search" 
        />

      </div>
    </div>
)
}