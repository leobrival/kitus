import React from "react";

const PixelTextFormatter = ({ text, maxWidth = 30 }) => {
  // Fonction pour diviser le texte en lignes
  const splitIntoLines = (text, maxWidth) => {
    const words = text.split(" ");
    const lines = [];
    let currentLine = [];

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

  const formattedLines = splitIntoLines(text, maxWidth);

  return (
    <p className="leading-3 text-xs font-mono">
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
