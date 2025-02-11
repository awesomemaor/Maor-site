import React, { useState } from 'react';
import { FaMale, FaFemale, FaWeightHanging, FaRuler, FaWineBottle, FaBeer, FaGlassWhiskey, FaPlusSquare } from 'react-icons/fa';
import { IoMaleFemaleOutline } from "react-icons/io5";

function AlcoholCalculator() {
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [drinkType, setDrinkType] = useState('vodka');
  const [amount, setAmount] = useState('');
  const [drinkAmountUnit, setDrinkAmountUnit] = useState('ml');
  const [cups, setCups] = useState('');
  const [bac, setBac] = useState(null);

  const drinkOptions = {
    vodka: 40,
    whiskey: 40,
    beer: 5,
    wine: 12
  };

  const calculateBAC = () => {
    if (!weight || !age || !amount || (!cups && drinkAmountUnit === 'ml')) {
      alert('אנא מלא את כל השדות');
      return;
    }

    const genderConstant = gender === 'male' ? 0.68 : 0.55;
    const alcoholPercentage = drinkOptions[drinkType] || 0;
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    let amountInMl;

    if (drinkAmountUnit === 'ml') {
      amountInMl = parseFloat(amount);
    } else if (drinkAmountUnit === 'cups') {
      amountInMl = cups * 50; // assuming each cup is 50ml
    }

    const alcoholConsumed = (alcoholPercentage / 100) * amountInMl;

    const bacValue = (alcoholConsumed * 5.14) / (weightInKg * genderConstant) - 0.015 * age;

    setBac(bacValue);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-gray-900 text-white rounded-lg shadow-xl p-8 max-w-4xl w-full">
        <h1 className="text-4xl font-extrabold text-center text-teal-300 mb-8">מחשבון רמת אלכוהול בדם</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* מין וגיל */}
          <div className="flex flex-col space-y-4">
            <div className="text-center">
              <label className="text-xl font-semibold text-teal-200 flex items-center justify-center">
                <IoMaleFemaleOutline className="mr-2 text-2xl" /> מין
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="male">זכר</option>
                <option value="female">נקבה</option>
              </select>
            </div>

            <div className="text-center">
              <label className="text-xl font-semibold text-teal-200 flex items-center justify-center">
                <FaPlusSquare className="mr-2 text-2xl" /> גיל
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="הכנס גיל"
              />
            </div>
          </div>

          {/* משקל וגובה */}
          <div className="flex flex-col space-y-4">
            <div className="text-center">
              <label className="text-xl font-semibold text-teal-200 flex items-center justify-center">
                <FaWeightHanging className="mr-2 text-2xl" /> משקל (קילוגרמים)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="הכנס משקל"
              />
            </div>

            <div className="text-center">
              <label className="text-xl font-semibold text-teal-200 flex items-center justify-center">
                <FaRuler className="mr-2 text-2xl" /> גובה (ס"מ)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="הכנס גובה"
              />
            </div>
          </div>
        </div>

        {/* סוג שתייה וכמות */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="text-center">
            <label className="text-xl font-semibold text-teal-200 flex items-center justify-center">
              <FaWineBottle className="mr-2 text-2xl" /> סוג שתייה
            </label>
            <select
              value={drinkType}
              onChange={(e) => setDrinkType(e.target.value)}
              className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="vodka">וודקה (40%)</option>
              <option value="whiskey">ווסקי (40%)</option>
              <option value="beer">בירה (5%)</option>
              <option value="wine">יין (12%)</option>
            </select>
          </div>

          <div className="text-center">
            <label className="text-xl font-semibold text-teal-200 flex items-center justify-center">
              <FaBeer className="mr-2 text-2xl" /> כמות שתייה
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="הכנס כמות"
              disabled={drinkAmountUnit === 'cups'}
            />
          </div>

          <div className="text-center">
            <label className="text-xl font-semibold text-teal-200 flex items-center justify-center">
              <FaGlassWhiskey className="mr-2 text-2xl" /> כוסות
            </label>
            <input
              type="number"
              value={cups}
              onChange={(e) => setCups(e.target.value)}
              className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="הכנס כוסות"
              disabled={drinkAmountUnit === 'ml'}
            />
            <div className="mt-2 flex items-center justify-center space-x-4">
              <button
                onClick={() => setDrinkAmountUnit('ml')}
                className={`px-4 py-2 rounded-full text-sm ${drinkAmountUnit === 'ml' ? 'bg-teal-500' : 'bg-gray-700'}`}
              >
                מ"ל
              </button>
              <button
                onClick={() => setDrinkAmountUnit('cups')}
                className={`px-4 py-2 rounded-full text-sm ${drinkAmountUnit === 'cups' ? 'bg-teal-500' : 'bg-gray-700'}`}
              >
                כוסות
              </button>
            </div>
          </div>
        </div>

        {/* כפתור חישוב */}
        <div className="mt-6 text-center">
          <button
            onClick={calculateBAC}
            className="w-full py-3 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition-all"
          >
            חשב רמת אלכוהול בדם
          </button>
        </div>

        {/* תוצאה */}
        {bac !== null && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold text-teal-200">
              רמת אלכוהול בדם שלך היא: {bac.toFixed(4)}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default AlcoholCalculator;