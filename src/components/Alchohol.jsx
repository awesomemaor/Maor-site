import React, { useState } from "react";
import AlcoholCalculator from "./AlcoholCalculator";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

const Alcohol = () => {
  const drinksInfo = [
    {
      name: "וודקה",
      description: "משקה אלכוהולי חזק שמקורו ברוסיה.",
      abvRange: "40%-50%",
      imageUrl: "./alcophotos/vodka.jpg",
      brands: [
        { name: "אבסולוט", abv: 40, description: "וודקה שוודית פופולרית." },
        { name: "פינלנדיה", abv: 40, description: "וודקה איכותית מפינלנד." },
        { name: "בלוגה", abv: 40, description: "וודקה רוסית יוקרתית." },
        { name: "סטולי", abv: 40, description: "וודקה רוסית קלאסית." },
      ],
    },
    {
      name: "וויסקי",
      description: "משקה אלכוהולי יוקרתי שמיוצר מדגנים.",
      abvRange: "40%-45%",
      imageUrl: "./alcophotos/wishky.webp",
      brands: [
        { name: "ג'וני ווקר", abv: 40, description: "וויסקי סקוטי מוכר." },
        { name: "ג'יימסון", abv: 40, description: "וויסקי אירי פופולרי." },
        { name: "מקאלן", abv: 43, description: "וויסקי סינגל מאלט יוקרתי." },
        { name: "ג'ק דניאלס", abv: 40, description: "וויסקי טנסי קלאסי." },
      ],
    },
    {
      name: "יין",
      description: "משקה קל המיוצר מענבים מותססים.",
      abvRange: "10%-14%",
      imageUrl: "./alcophotos/wine.jpg",
      brands: [
        { name: "קברנה סוביניון", abv: 13, description: "יין אדום יבש פופולרי." },
        { name: "מרלו", abv: 13.5, description: "יין אדום רך ומעודן." },
        { name: "שרדונה", abv: 12.5, description: "יין לבן קלאסי." },
        { name: "רוזה", abv: 12, description: "יין קליל ומרענן." },
      ],
    },
    {
      name: "בירה",
      description: "משקה אלכוהולי פופולרי שמתאים לכל אירוע.",
      abvRange: "5%-7%",
      imageUrl: "./alcophotos/beer.jpg",
      brands: [
        { name: "גולדסטאר", abv: 5, description: "בירה כהה ישראלית." },
        { name: "מכבי", abv: 5, description: "בירה ישראלית קלאסית." },
        { name: "הייניקן", abv: 5, description: "בירה לאגר מהולנד." },
        { name: "קרלסברג", abv: 5, description: "בירה פופולרית מדנמרק." },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
      <div className="min-h-screen text-white">
        {/* כותרת */}
        <header
          className="h-64 flex flex-col justify-center items-center text-center bg-cover bg-center"
        >
          <h1 className="text-5xl font-extrabold drop-shadow-md">עולם האלכוהול</h1>
          <p className="mt-4 text-lg font-medium">כל מה שצריך לדעת על סוגי משקאות</p>
        </header>

        {/* סרטון */}
        <section className="flex justify-center mt-10 px-4">
          <video
            className="w-full max-w-3xl rounded-lg shadow-lg"
            autoPlay
            loop
            muted
            playsInline
            src="./alcophotos/alcovideo.mp4"
          />
        </section>

        {/* סוגי משקאות */}
        <section className="max-w-7xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold mb-6 underline text-center decoration-pink-400">
            סוגי משקאות
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {drinksInfo.map((drink, index) => (
              <div
                key={index}
                className="bg-purple-800 rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 p-4 flex flex-col items-center text-center"
              >
                <img
                  src={drink.imageUrl}
                  alt={drink.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-bold mt-4">{drink.name}</h3>
                <p className="text-gray-300 text-sm">{drink.description}</p>
                <p className="font-medium text-gray-200 mt-2">אחוזי אלכוהול: {drink.abvRange}</p>
                <button
                  className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition"
                  onClick={() => setOpenIndex(index)}
                >
                  פרטים נוספים
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Modal */}
        {openIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-purple-800 p-6 rounded-lg shadow-lg w-96 relative text-center">
              <button
                className="absolute top-2 right-2 text-white font-bold text-xl"
                onClick={() => setOpenIndex(null)}
              >
                ✖
              </button>
              <h3 className="text-xl font-bold mb-4">{drinksInfo[openIndex].name}</h3>
              <p className="mb-4">{drinksInfo[openIndex].description}</p>
              <p className="mb-4">אחוזי אלכוהול: {drinksInfo[openIndex].abvRange}</p>
              {drinksInfo[openIndex].brands.map((brand, i) => (
                <div key={i} className="mb-4">
                  <p className="font-bold">{brand.name}</p>
                  <p className="text-gray-300 text-sm">{brand.description}</p>
                  <p className="text-gray-400 text-sm">אחוז אלכוהול: {brand.abv}%</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* מחשבון אלכוהול */}
        <section className="max-w-5xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold mb-6 underline decoration-yellow-500 text-center">
            מחשבון האלכוהול שלך
          </h2>
          <AlcoholCalculator />
        </section>
      </div>
  );
};

export default Alcohol;