"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
// import { TextAnimator } from "../textAnimator.js";

const GlitchButton = ({ href, children }) => {
  const buttonRef = useRef(null);
  const textAnimatorRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      // Crée une nouvelle instance de TextAnimator
      textAnimatorRef.current = new TextAnimator(buttonRef.current);

      // Ajoute des écouteurs d'événements pour l'animation de hover
      const handleMouseEnter = () => textAnimatorRef.current.animate();
      const handleMouseLeave = () => textAnimatorRef.current.animateBack();

      buttonRef.current.addEventListener("mouseenter", handleMouseEnter);
      buttonRef.current.addEventListener("mouseleave", handleMouseLeave);

      // Nettoyage des écouteurs d'événements
      return () => {
        buttonRef.current.removeEventListener("mouseenter", handleMouseEnter);
        buttonRef.current.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <Link href={href} passHref>
      <p ref={buttonRef} className="glitch-button">
        {children}
      </p>
    </Link>
  );
};

export default GlitchButton;
