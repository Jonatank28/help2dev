import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <main className="h-[calc(100vh-155px)]  md:h-[calc(100vh-52px)] widthDefault mt-8 overflow-hidden">
      <div className="hidden md:block">
        <Skeleton className="h-[88px] w-full bg-secondary mb-4" />
        <div className='h-[calc(100vh-225px)] w-full grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 md:pt-14'>
          <Skeleton className="h-full w-full bg-secondary" />
          <div className="space-y-8">
            <Skeleton className="h-[58px] w-[468px] bg-secondary" />
            <Skeleton className="h-[58px] w-[268px] bg-secondary" />
          </div>
        </div>
      </div>
      <div className="block md:hidden h-full space-y-6">
        <Skeleton className="h-[30%] w-full bg-secondary" />
        <Skeleton className="h-[30%] w-full bg-secondary" />
        <Skeleton className="h-[50px] w-full bg-secondary" />
        <Skeleton className="h-[50px] w-full bg-secondary" />
      </div>
    </main>
  )
}

export default loading


