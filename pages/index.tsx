
import { NextPage } from "next";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";

const Home: NextPage = () => {
  const address = useAddress();

  //checking if user hasnt connected and display warning.

  if(!address){
    return(
      <Container maxW={"1200px"}>
        <Flex h={"50vh"} justifyContent={"center"} alignItems ={"center"} ><Heading>Please connect your wallet</Heading></Flex>
      </Container>
    )
  }

  return (
   <Container>

   </Container>
  );
};

export default Home;
