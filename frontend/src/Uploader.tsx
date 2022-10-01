import { ChakraProvider, Container, HStack } from "@chakra-ui/react";
import { useState } from "react";

export default function Uploader() {
  return (
    <ChakraProvider>
      <form
        action="https://evening-anchorage-22221.herokuapp.com/upload"
        method="POST"
        encType="multipart/form-data"
      >
        <input type="file" name="file" />
        <input type="submit" />
      </form>
    </ChakraProvider>
  );
}
