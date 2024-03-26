import { Skeleton } from "@/components/ui/skeleton";


const loading = () => {
  return (
    <main className="h-[calc(100vh-52px)] widthDefault mt-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
        <Skeleton className="h-[252px] w-[268px] bg-secondary" />
      </div>
    </main>
  )
}

export default loading
