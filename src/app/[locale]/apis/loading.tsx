import { Skeleton } from "@/components/ui/skeleton";


const loading = () => {
  return (
    <main className="md:mx-2">
      <div className="w-[min(1200px,95vw)] mx-auto">
        <div className="flex flex-col gap-4">
          <Skeleton className="h-[96px] bg-secondary" />
          <Skeleton className="h-[464px] bg-secondary" />
          <Skeleton className="h-[464px] bg-secondary" />
        </div>
      </div>
    </main>
  )
}

export default loading
