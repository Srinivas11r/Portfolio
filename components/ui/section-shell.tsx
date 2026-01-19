"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface SectionShellProps {
  id?: string;
  className?: string;
  children?: ReactNode;
  delay?: number;
}

export function SectionShell({ id, className, children = null, delay = 0 }: SectionShellProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={clsx("py-20", className)}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 md:px-10">{children}</div>
    </motion.section>
  );
}
