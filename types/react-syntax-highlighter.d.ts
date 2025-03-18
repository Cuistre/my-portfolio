declare module "react-syntax-highlighter" {
  import { ReactNode } from "react";

  export interface PrismProps {
    children: ReactNode;
    language: string;
    style?: unknown;
    PreTag?: keyof JSX.IntrinsicElements | React.ComponentType<unknown>;
    className?: string;
    [key: string]: unknown;
  }

  export const Prism: React.FC<PrismProps>;
}

declare module "react-syntax-highlighter/dist/esm/styles/prism" {
  export const vscDarkPlus: unknown; // Tu pourrais aussi typer les styles si tu veux
}
