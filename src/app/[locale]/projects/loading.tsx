import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  const style = 'h-[196px] md:h-[252px] w-full md:w-[268px] bg-secondary';

  const skeletons = Array.from({ length: 18 }, (_, index) => (
    <Skeleton key={index} className={style} />
  ));

  return (
    <main className="h-[calc(100vh-52px)] widthDefault mt-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {skeletons}
      </div>
    </main>
  );
};

export default Loading;
