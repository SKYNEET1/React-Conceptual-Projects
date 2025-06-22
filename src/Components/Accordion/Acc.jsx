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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="border rounded shadow-lg text-center flex flex-col gap-8 p-5 min-w-[300px] bg-white">

        <div
          className="bg-blue-500 rounded p-3 flex justify-center min-w-[300px] cursor-pointer hover:bg-blue-600 transition"
          onClick={Togglemode}
        >
          {multiple ? (
            <h1 className="text-xl font-semibold text-white w-full">
              Enable Multiple Section
            </h1>
          ) : (
            <h1 className="text-xl font-semibold text-white w-full">
              Enable Single Section
            </h1>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {data.map((item) => {
            return (
              <div
                className="bg-gray-800 text-white grid grid-cols-1 mb-2 w-full max-w-[500px] rounded p-4 hover:bg-gray-700 transition"
                key={item.id}
              >
                <h2 className="text-lg font-bold mb-2">{item.question}</h2>
                <p className="min-h-[40px] px-3 text-sm">
                  {multiple
                    ? answer.includes(item.id)
                      ? item.answer
                      : null
                    : answer === item.id
                      ? item.answer
                      : null}
                </p>
                <button
                  className="mt-2 bg-yellow-400 text-black font-medium rounded px-3 py-1 hover:bg-yellow-500 transition"
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
