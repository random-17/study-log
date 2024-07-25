"use client";

import * as React from "react";
import { TimePicker } from "./time-picker";
import { Button } from "./ui/button";

function extractTime(totalTime: number) {
  const hours = Math.floor(totalTime / 3600);
  const remaining = totalTime % 3600;
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  return [hours, minutes, seconds];
}

export function StudyLog() {
  const [time, setTime] = React.useState<Date>();
  const [totalTime, setTotalTime] = React.useState<number>(0);
  const [hours, minutes, seconds] = extractTime(totalTime);

  const handleAdd = () => {
    const hours = time?.getHours() ?? 0;
    const minutes = time?.getMinutes() ?? 0;
    const seconds = time?.getSeconds() ?? 0;

    setTotalTime(
      (totalTime) => totalTime + hours * 3600 + minutes * 60 + seconds,
    );
    setTime(new Date(new Date().setHours(0, 0, 0, 0)));
  };

  const handleReset = () => {
    setTime(new Date(new Date().setHours(0, 0, 0, 0)));
  };

  return (
    <section className="space-y-5">
      <div className="flex items-center justify-center">
        <TimePicker setDate={setTime} date={time} />
        <Button onClick={handleAdd} className="h-8 mt-5 ml-5">
          Add
        </Button>
        <Button onClick={handleReset} className="h-8 mt-5 ml-2">
          Reset
        </Button>
      </div>
      <p className="text-muted-foreground text-lg max-w-lg pt-10">Total</p>
      <div className="flex items-center justify-center text-5xl text-muted-foreground gap-12 pb-4">
        <span>
          {hours} <span className="text-sm">HH</span>
        </span>
        <span>
          {minutes} <span className="text-sm">MM</span>
        </span>
        <span>
          {seconds} <span className="text-sm">SS</span>
        </span>
      </div>
      <Button onClick={() => setTotalTime(0)}>Reset</Button>
    </section>
  );
}
