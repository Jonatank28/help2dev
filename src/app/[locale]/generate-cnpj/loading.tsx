import { Skeleton } from "@/components/ui/skeleton";


const loading = () => {
  return (
    <main className="w-screen h-[calc(100vh-52px)] flex justify-center items-center">
      <div className="mb-[200px]">
        <Skeleton className="h-[242px] w-[400px] bg-secondary" />
      </div>
    </main>
  )
}

export default loading
