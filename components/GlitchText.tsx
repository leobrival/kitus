"use client";

import React, { useEffect, useState } from "react";

// Définition de l'interface pour les props du composant
interface GlitchTextProps {
  text: string;
}

// Type pour la map de caractères
type CharMap = {
  [key: string]: string;
};

// Déclaration de la fonction pour le composant GlitchText
export default function GlitchText({
  text,
}: GlitchTextProps): React.ReactElement {
  const [glitchedText, setGlitchedText] = useState<string>(text);

  useEffect(() => {
    const charMap: CharMap = {
      A: "@",
      E: "3",
      I: "1",
      O: "0",
      S: "$",
      T: "7",
      _: " ",
    };

    const glitchEffect = (): void => {
      const textArray: string[] = text.split("");
      const newTextArray: string[] = textArray.map((char: string) => {
        if (Math.random() < 0.3) {
          return charMap[char.toUpperCase()] || char;
        }
        return char;
      });

      setGlitchedText(newTextArray.join(""));

      setTimeout(() => {
        setGlitchedText(text);
      }, 250);
    };

    const randomizeInterval = (): number => {
      return Math.floor(Math.random() * (1000 - 200 + 1)) + 200;
    };

    let intervalId: NodeJS.Timeout = setInterval(
      glitchEffect,
      randomizeInterval()
    );

    const intervalController = (): void => {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        glitchEffect();
        intervalController();
      }, randomizeInterval());
    };

    intervalController();

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <h1 className="bg-stone-300 p-2 text-[6rem] uppercase leading-[6rem]">
      {glitchedText}
    </h1>
  );
}
