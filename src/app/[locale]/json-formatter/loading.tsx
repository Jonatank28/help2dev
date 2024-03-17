import { Skeleton } from "@/components/ui/skeleton";


const loading = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-52px)]">
      <Skeleton className="bg-secondary rounded-none border-r border-background" />
      <Skeleton className="bg-secondary rounded-none border-l border-background" />
    </main>
  )
}

export default loading
