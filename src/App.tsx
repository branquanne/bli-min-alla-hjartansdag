"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Nej",
      "Är du säker?",
      "Om jag frågar snällt?",
      "Snälla söta rara",
      "Du kan få en sportlunch :)",
      "Eller kanske en chipspås",
      "SNÄÄLLAA",
      "Men :*(",
      "Jag kommer dö",
      "Yep, jag är död",
      "ok du snackar med brans spöke",
      "snälla",
      ":((((",
      "Snälla söta rara med socker på",
      "Estoy muerto",
      "Nej :(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! Älskar dig, fjärtispruttis ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Vill du bli min dejt på allahjärtans-dag?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Ja :)
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Nej" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
