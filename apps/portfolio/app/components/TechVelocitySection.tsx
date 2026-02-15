"use client";

import VelocityScroll from "./VelocityScroll";
import { techstackData } from "../lib/constants";

export default function TechVelocitySection() {
  return (
    <div className="w-full py-4 bg-foreground/[0.03] backdrop-blur-md border-y border-foreground/5 overflow-hidden scale-[1.02] sticky top-0 z-50">
      <VelocityScroll baseVelocity={-1}>
        {techstackData.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-2 mx-2  bg-foreground/[0.03] border border-foreground/5 hover:bg-foreground/[0.08] transition-all duration-300"
          >
            <span className="text-2xl text-foreground/60">{tech.icon}</span>
            <span className="text-sm font-semibold tracking-wider uppercase text-foreground/40">
              {tech.name}
            </span>
          </div>
        ))}
      </VelocityScroll>
    </div>
  );
}
