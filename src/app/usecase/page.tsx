"use client";
import { useState } from "react";

const questions = [
  "NextJS公式のDocとLearnを読み込む覚悟はありますか？",
  "アプリの画面表示にどれくらいの速度が必要か理解してますか？",
  "DOMの組み立てやAPIのレスポンスにどれくらい時間がかかっているか把握してますか？",
  "SEOの改善が本当に必要ですか？",
  "予期しない動作が起きても根気よくコードを読んだりできますか？",
  "定期的な破壊的変更があってもめげずにアップデートする覚悟はありますか？",
];

function NextjsChecker() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [result, setResult] = useState("");

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (answer === "no") {
      setResult("You don't need Next.js");
    } else if (currentQuestion === questions.length - 1) {
      if (newAnswers.every((a) => a === "yes")) {
        setResult("Hello Next.js !!!");
      }
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(null));
    setResult("");
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl my-12 text-center font-bold text-gray-800">
        Do you need Next.js?
      </h2>
      {result ? (
        <div className="text-center">
          <div className="text-2xl font-semibold text-red-500 mb-4">
            {result}
          </div>
          <button
            onClick={resetQuiz}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            もう一度
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-6">
          <p className="text-xl font-medium text-gray-700">
            {questions[currentQuestion]}
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => handleAnswer("yes")}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer("no")}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NextjsChecker;
