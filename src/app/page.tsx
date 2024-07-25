import { StudyLog } from "@/components/study-log";

export default function Home() {
  return (
    <div className="m-24 flex flex-col gap-8 container max-w-3xl relative mx-auto flex-1 p-4 border border-border backdrop-blur-[2px] rounded-lg">
      <div className="flex flex-col items-center gap-4 text-center mx-auto max-w-2xl m-12">
        <h1 className="text-3xl font-cal">Study Log</h1>
        <p className="text-muted-foreground text-lg max-w-lg pb-10">
          Calculate Your Total Study Time Easily!
        </p>
        <StudyLog />
      </div>
    </div>
  );
}
