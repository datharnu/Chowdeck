import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  clx: string;
};

export default function Badge({ children, clx }: BadgeProps) {
  return <div className={`badge ${clx}`}>{children}</div>;
}
