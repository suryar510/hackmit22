import React from "react";

export interface AnswerProps {
  answer: string;
}

const Answer = ({ answer }: AnswerProps) => {
  if (!answer) {
    return (
      <div className="mt-5 flex flex-col w-full text-base rounded-lg">
        {/* <div className="mx-5 mt-3 mb-2 text-black font-semibold">{question}</div> */}
        <div className="my-5 mx-5 text-black font-semibold">{answer}</div>
      </div>
    );
  }
  return (
    <div className="mt-5 flex flex-col w-full text-base rounded-lg border border-green-600">
      {/* <div className="mx-5 mt-3 mb-2 text-black font-semibold">{question}</div> */}
      <div className="my-5 mx-5 text-black font-semibold">{answer}</div>
    </div>
  );
};

export default Answer;
