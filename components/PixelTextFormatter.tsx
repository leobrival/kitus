import React from "react";

// Interface pour les props du composant
interface PixelTextFormatterProps {
  text: string;
  maxWidth?: number;
}

// Type pour la fonction de division du texte en lignes
type SplitIntoLinesFunction = (text: string, maxWidth: number) => string[];

const PixelTextFormatter: React.FC<PixelTextFormatterProps> = ({
  text,
  maxWidth = 30,
}) => {
  // Fonction pour diviser le texte en lignes
  const splitIntoLines: SplitIntoLinesFunction = (text, maxWidth) => {
    const words: string[] = text.split(" ");
    const lines: string[] = [];
    let currentLine: string[] = [];

    words.forEach((word) => {
      if ((currentLine.join(" ") + " " + word).length <= maxWidth) {
        currentLine.push(word);
      } else {
        lines.push(currentLine.join(" "));
        currentLine = [word];
      }
    });

    if (currentLine.length > 0) {
      lines.push(currentLine.join(" "));
    }

    return lines;
  };

  const formattedLines: string[] = splitIntoLines(text, maxWidth);

  return (
    <p className="font-mono text-xs leading-3">
      {formattedLines.map((line, index) => (
        <React.Fragment key={index}>
          ░ {line.toUpperCase()}
          {index < formattedLines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  );
};

export default PixelTextFormatter;
