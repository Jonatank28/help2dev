import { Skeleton } from "@/components/ui/skeleton";
import { projects } from './data/projects';

const Loading = () => {
  const style = 'h-[196px] md:h-[252px] w-full md:w-[268px] bg-secondary';

  const skeletons = Array.from({ length: projects.length }, (_, index) => (
    <Skeleton key={index} className={style} />
  ));

  return (
    <main className="widthDefault mt-12">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {skeletons}
      </div>
    </main>
  );
};

export default Loading;
