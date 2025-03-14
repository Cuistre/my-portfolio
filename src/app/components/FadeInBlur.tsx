"use client";

import { ReactNode, cloneElement } from "react";

export default function FadeInBlur({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  // Vérifie que children est un élément React valide
  if (!children || typeof children !== "object") {
    return <>{children}</>;
  }

  // Clone l’élément enfant et ajoute la classe et le style
  return cloneElement(children as React.ReactElement, {
    className: `${
      (children as React.ReactElement).props.className || ""
    } fade-in-blur`,
    style: {
      ...(children as React.ReactElement).props.style,
      animationDelay: `${delay}s`,
    },
  });
}
