import { ChakraProvider, Container, HStack, Textarea } from "@chakra-ui/react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Uploader() {
  const [textValue, setTextValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(textValue);
    // @TODO: Michael do whatever u want to submit here
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setTextValue(event.target.value);
  };

  return (
    <ChakraProvider>
      <div className="" style={{ height: "100vh", margin: "0" }}>
        <div className="mx-20 flex flex-col" style={{ maxHeight: "100%" }}>
          <h1 className="text-center mt-10 mb-5 text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Aneta
          </h1>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
              <Textarea
                placeholder="Here is a sample placeholder"
                onChange={handleChange}
              />
              <Button type="submit" variant="outline" width="full" mt={4}>
                Upload
              </Button>
            </form>
          </Box>
        </div>
      </div>
      {/* <form
        action="https://evening-anchorage-22221.herokuapp.com/upload"
        method="POST"
        encType="multipart/form-data"
      >
        <input type="file" name="file" />
        <input type="submit" />
      </form> */}
    </ChakraProvider>
  );
}
