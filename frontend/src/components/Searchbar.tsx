import React from "react";
import { HStack, Input, Button } from "@chakra-ui/react";

interface SearchbarProps {
  question: string;
  editQuestion: (question: string) => void;
  onSubmit: () => void;
}

const Searchbar = ({ question, editQuestion, onSubmit }: SearchbarProps) => {
  return (
    <HStack width="100%">
      <Input
        value={question}
        onChange={(e) => editQuestion(e.target.value)}
        placeholder="Search anything..."
      />
      <Button type="submit" onClick={onSubmit}>
        Search
      </Button>
    </HStack>
  );
};

export default Searchbar;
