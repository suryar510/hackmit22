import { ChakraProvider, Link, Spinner, Textarea } from "@chakra-ui/react";
import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import UILink from "./components/UILink";

export default function Uploader() {
  const [textValue, setTextValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [uiLink, setUILink] = useState<string>("");

  const handleSubmit = async () => {
    console.log(textValue);
    setIsLoading(true);
    setUILink("http://localhost:3000/search/sj3f9k2");
    await sleep(6.5);
    setIsLoading(false);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setTextValue(event.target.value);
  };

  const sleep = (seconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  };

  return (
    <ChakraProvider>
      <div className="" style={{ height: "100vh", margin: "0" }}>
        <div className="mx-20 flex flex-col" style={{ maxHeight: "100%" }}>
          <h1 className="text-center mt-10 mb-5 text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Aneta
          </h1>
          <Box my={4} textAlign="left">
            <Textarea
              value={textValue}
              placeholder="Enter your data here..."
              onChange={handleChange}
            />
            <Button
              variant="outline"
              width="full"
              mt={4}
              onClick={handleSubmit}
            >
              Upload
            </Button>
            <Box>
              {isLoading ? (
                <div className="mt-5 mb-5">
                  <Spinner size="xl" />
                </div>
              ) : (
                <UILink link={uiLink} />
              )}
            </Box>
          </Box>
        </div>
      </div>
    </ChakraProvider>
  );
}
