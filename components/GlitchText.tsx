"use client";

import { useEffect, useState } from "react";

// Déclaration de la fonction pour le composant GlitchText
export default function GlitchText({ text }) {
  const [glitchedText, setGlitchedText] = useState(text);

  useEffect(() => {
    const charMap = {
      A: "@",
      E: "3",
      I: "1",
      O: "0",
      S: "$",
      T: "7",
      _: " ",
    };

    const glitchEffect = () => {
      const textArray = text.split("");
      const newTextArray = textArray.map((char) => {
        // Randomize whether to glitch this character
        if (Math.random() < 0.3) {
          // 30% chance to glitch any given character
          return charMap[char.toUpperCase()] || char;
        }
        return char;
      });

      setGlitchedText(newTextArray.join(""));

      // Revenir au texte original après un court délai
      setTimeout(() => {
        setGlitchedText(text);
      }, 250);
    };

    const randomizeInterval = () => {
      // Utilisez un intervalle de temps aléatoire entre 200 et 1000 ms pour le glitch
      const randomInterval = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;
      return randomInterval;
    };

    // Définir un intervalle initial
    let intervalId = setInterval(glitchEffect, randomizeInterval());

    // Remplace l'intervalle actuel par un nouveau avec un intervalle de temps aléatoire
    const intervalController = () => {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        glitchEffect();
        intervalController(); // Redémarrer avec un nouvel intervalle aléatoire
      }, randomizeInterval());
    };

    intervalController();

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <h1 className="bg-stone-300 p-2 text-[6rem] uppercase leading-[6rem]">
      {glitchedText}
    </h1>
  );
}
