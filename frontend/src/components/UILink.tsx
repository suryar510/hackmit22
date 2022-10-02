import React from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";

export interface UILinkProps {
  link: string;
}

const UILink = ({ link }: UILinkProps) => {
  if (!link) {
    return <div></div>;
  }

  return (
    <div className="mt-5 flex flex-col w-full text-base rounded-lg border">
      {/* <div className="mx-5 mt-3 mb-2 text-black font-semibold">{question}</div> */}
      <div className="my-5 mx-5 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      </div>
    </div>
  );
};

export default UILink;
