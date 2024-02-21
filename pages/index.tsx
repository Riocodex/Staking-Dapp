
import { NextPage } from "next";
import { Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import StakeToken from "../components/StakeToken";
import RewardToken from "../components/RewardToken";


const Home: NextPage = () => {
  const address = useAddress();//getting the address of the wallet connected to app

  //checking if user hasnt connected and display warning.

  if(!address){
    return(
      <Container maxW={"1200px"}>
        <Flex h={"50vh"} justifyContent={"center"} alignItems ={"center"} ><Heading>Please connect your wallet</Heading></Flex>
      </Container>
    )
  }

  return (
   <Container maxW={"1200px"}>
      <SimpleGrid columns={2} spacing={4}>
        {/* displaying tokens */}
        <StakeToken/>
        <RewardToken/>
      </SimpleGrid>
   </Container>
  );
};

export default Home;
