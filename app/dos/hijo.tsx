import type { ReactNode } from "react";

type HijoProps = {
  children: ReactNode;
};

export default function Hijo({ children }: HijoProps) {
  return (
    <div>
      Este cacorro es mi hijo {children}
    </div>
  );
}