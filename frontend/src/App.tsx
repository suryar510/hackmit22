import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Answer from "./components/Answer";
import PreviousQA, { PreviousQAProps } from "./components/PreviousQA";
import { Spinner, Box, ChakraProvider } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const [currentAnswer, setCurrentAnswer] = useState<string>(
    "This is the answer."
  );

  const { engineId } = useParams();
  const [previousQAs, setPreviousQAs] = useState<PreviousQAProps[]>([
    {
      question: "Why is francis so silly?",
      answer: "Because he is silly.",
    },
    {
      question: "Why is francis so silly?",
      answer: "Because he is silly.",
    },
    {
      question: "Why is francis so silly?",
      answer: "Because he is silly.",
    },
    {
      question: "Why is francis so silly?",
      answer: "Because he is silly.",
    },
    {
      question: "Why is francis so silly?",
      answer: "Because he is silly.",
    },
    {
      question: "Why is francis so silly?",
      answer: "Because he is silly.",
    },
    {
      question: "Why is francis so silly?",
      answer: "Because he is silly.",
    },
    {
      question: "Why is francis so silly?",
      answer: "Because he is silly.",
    },
    {
      question: "Why is francis so silly?",
      answer: "Because he is silly.",
    },
    {
      question: "Why is francis so silly?",
      answer: "Because he is silly.",
    },
    {
      question: "Why is francis so silly?",
      answer: "Because he is silly.",
    },
    {
      question: "Why is francis so silly?",
      answer: "Because he is silly.",
    },
    {
      question: "Why is francis so silly?",
      answer: "Because he is silly.",
    },
    {
      question: "Why is francis so silly?",
      answer: "Because he is silly.",
    },
    {
      question: "Why is francis so silly?",
      answer: "Because he is silly.",
    },
  ]);

  const editCurrentQuestion = (question: string) => {
    setCurrentQuestion(question);
  };

  const onSubmit = () => {
    setIsLoading(true);
    alert(engineId);
  };

  const style = `.shadow::before {
    content: '';
    position: absolute;
    bottom: 0;
    background: linear-gradient(to bottom, transparent, white);
    height: 30%;
    width: 100%;
    pointer-events: none;
}`;

  return (
    <ChakraProvider>
      <style>{style}</style>
      <div className="" style={{ height: "100vh", margin: "0" }}>
        <div className="mx-20 flex flex-col" style={{ maxHeight: "100%" }}>
          <h1 className="text-center mt-10 mb-5 text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Aneta
          </h1>
          <Searchbar editQuestion={editCurrentQuestion} onSubmit={onSubmit} />
          <Box>
            {isLoading ? (
              <Spinner size="xl" />
            ) : (
              <Answer answer={currentAnswer} />
            )}
          </Box>
          <span className="h-0.5 w-full bg-slate-300 lg:w-1/3 my-5"></span>
          <div className="overflow-y-auto h-full mb-20 shadow">
            {previousQAs.map((previousQA) => {
              return <PreviousQA {...previousQA} key={previousQA?.question} />;
            })}
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}

// overflow-y-auto
export default App;
