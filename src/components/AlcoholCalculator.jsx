import React, { useState } from 'react';
import { IoMaleFemaleOutline } from "react-icons/io5";
import GaugeComponent from 'react-gauge-component';

function AlcoholCalculator() {
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [drinkType, setDrinkType] = useState('vodka');
  const [amount, setAmount] = useState('');
  const [bac, setBac] = useState(null);

  const drinkOptions = { vodka: 40, whiskey: 40, beer: 5, wine: 12 };

  const calculateBAC = () => {
    if (!weight || !age || !amount) {
      alert('אנא מלא את כל השדות');
      return;
    }

    const genderConstant = gender === 'male' ? 0.68 : 0.55; // קבוע לפי מין
    const alcoholPercentage = drinkOptions[drinkType]; // אחוז האלכוהול במשקה
    const weightInGrams = parseFloat(weight) * 1000; // משקל בגרמים
    const amountInMl = parseFloat(amount); // כמות שתייה במ"ל

    // חישוב כמות האלכוהול בגרמים
    const alcoholConsumedInGrams = (amountInMl * alcoholPercentage * 0.8); // 0.8 הוא הגורם ההמרה לאלכוהול בגרמים

    // חישוב ה-BAC
    const bacValue = (alcoholConsumedInGrams / (weightInGrams * genderConstant)) * 100;

    // הגבלת התוצאה ב-0 אם היא שלילית
    setBac(Math.max(0, bacValue));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-900 to-blue-900">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-white/20 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-white text-center mb-8">מחשבון רמת אלכוהול בדם</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-lg text-gray-200 flex items-center">
                <IoMaleFemaleOutline className="mr-2 text-xl" /> מין
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-3 mt-2 bg-white/10 text-white border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              >
                <option value="male">זכר</option>
                <option value="female">נקבה</option>
              </select>
            </div>

            <div>
              <label className="text-lg text-gray-200 flex items-center">
                גיל
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-3 mt-2 bg-white/10 text-white border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="הכנס גיל"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-lg text-gray-200 flex items-center">
                משקל (ק"ג)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full p-3 mt-2 bg-white/10 text-white border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="הכנס משקל"
              />
            </div>

            <div>
              <label className="text-lg text-gray-200 flex items-center">
                גובה (ס"מ)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full p-3 mt-2 bg-white/10 text-white border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="הכנס גובה"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="text-lg text-gray-200 flex items-center">
              סוג שתייה
            </label>
            <select
              value={drinkType}
              onChange={(e) => setDrinkType(e.target.value)}
              className="w-full p-3 mt-2 bg-white/10 text-white border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            >
              <option value="vodka">וודקה (40%)</option>
              <option value="whiskey">וויסקי (40%)</option>
              <option value="beer">בירה (5%)</option>
              <option value="wine">יין (12%)</option>
            </select>
          </div>

          <div>
            <label className="text-lg text-gray-200 flex items-center">
              כמות (מ"ל)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 mt-2 bg-white/10 text-white border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="הכנס כמות"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={calculateBAC}
            className="w-full py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-all focus:ring-2 focus:ring-purple-500 focus:outline-none"
          >
            חשב רמת אלכוהול בדם
          </button>
        </div>

        {bac !== null && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white text-center mb-4">
              רמת אלכוהול בדם שלך: <span className="text-purple-400">{bac.toFixed(4)}</span>
            </h2>
            <div className="w-3/4 md:w-1/2 mx-auto">
              <GaugeComponent
                value={Math.min(bac * 100, 100)}  // BAC as percentage
                type="radial"
                arc={{
                  gradient: true,
                  width: 0.15, // רוחב הגרף
                  padding: 0,  // אין רווחים בין הארגזים
                  subArcs: [
                    {
                      limit: 25,  // גבול תחום הצבע הראשון (ירוק)
                      color: '#4CAF50',  // ירוק
                      showTick: true
                    },
                    {
                      limit: 50,  // גבול הצבע השני (צהוב)
                      color: '#FFEB3B',  // צהוב
                      showTick: true
                    },
                    {
                      limit: 75,  // גבול הצבע השלישי (כתום)
                      color: '#FF9800',  // כתום
                      showTick: true
                    },
                    {
                      limit: 100,  // גבול הצבע האחרון (אדום)
                      color: '#F44336',  // אדום
                      showTick: true
                    }
                  ]
                }}
                pointer={{
                  type: "arrow",  // סוג חץ
                  color: "#fff",  // צבע חץ
                  length: 0.75,
                  animate: true,
                  animationDuration: 1000  // האנימציה עוברת לאט יותר
                }}
                labels={{
                  valueLabel: { hide: false, style: { fontSize: "35px", fill: "#fff" } },
                }}
              />
            </div>
            <div className="text-center mt-2 text-gray-300">
              {bac < 0.03
                ? "רמת אלכוהול בטוחה"
                : bac < 0.08
                ? "רמת אלכוהול גבולית"
                : "רמת אלכוהול מסוכנת"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AlcoholCalculator;