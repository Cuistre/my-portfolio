"use client";

import { ReactNode, cloneElement, isValidElement } from "react";

export default function FadeInBlur({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  // Vérifie que children est un élément React valide
  if (!isValidElement(children)) {
    return <>{children}</>;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const child = children as React.ReactElement<any>;

  // Clone l’élément enfant et ajoute la classe et le style
  return cloneElement(child, {
    className: `${child.props.className || ""} fade-in-blur`,
    style: {
      ...child.props.style,
      animationDelay: `${delay}s`,
    },
  });
}
