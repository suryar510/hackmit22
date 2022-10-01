import React from "react";

export interface PreviousQAProps {
  question: string;
  answer: string;
}

const PreviousQA = ({ question, answer }: PreviousQAProps) => {
  return (
    <div className="flex flex-col w-full text-base rounded-lg border border-gray-300 mb-5">
      <div className="mx-5 mt-3 mb-2 text-black font-semibold">{question}</div>
      <div className="mx-5 mb-3 text-gray-600">{answer}</div>
    </div>
  );
};

export default PreviousQA;
