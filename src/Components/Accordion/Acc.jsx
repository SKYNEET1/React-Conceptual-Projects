import React, { useState } from 'react';
import data from './Data';

const Acc = () => {
  const [multiple, setMultiple] = useState(false);
  const [answer, setAnswer] = useState(null);

  const showanswer = (id) => {
    setAnswer(answer === id ? null : id);
  };

  const showmultipelans = (id) => {
    setAnswer((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const Togglemode = () => {
    setMultiple(!multiple);
    setAnswer(!multiple ? [] : null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 to-blue-500 p-4 overflow-hidden">
      <div className="bg-white rounded shadow-lg flex flex-col gap-6 p-6 w-full max-w-[500px]">
        
        <div
          className="bg-yellow-400 rounded p-3 cursor-pointer hover:bg-yellow-500 transition"
          onClick={Togglemode}
        >
          <h1 className="text-xl font-bold text-gray-800">
            {multiple ? "Enable Multiple Section" : "Enable Single Section"}
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          {data.map((item) => {
            const isVisible = multiple
              ? answer.includes(item.id)
              : answer === item.id;

            return (
              <div
                key={item.id}
                className="bg-gray-800 text-white rounded p-4 transition transform hover:scale-105"
              >
                <h2 className="text-lg font-semibold mb-2">{item.question}</h2>

                <p
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isVisible ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.answer}
                </p>

                <button
                  className="mt-2 bg-yellow-500 text-black rounded px-3 py-1 hover:bg-yellow-600 transition cursor-pointer"
                  onClick={
                    !multiple
                      ? () => showanswer(item.id)
                      : () => showmultipelans(item.id)
                  }
                >
                  +
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Acc;
