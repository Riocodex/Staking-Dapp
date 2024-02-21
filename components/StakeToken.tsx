import { Card, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
import { STAKE_TOKEN_ADDRESSES } from "../constants/addresses";

const StakeToken = () => {

    const address = useAddress()//getting the address of the wallet connected to app
    const { contract: stakeTokenContract, isLoading: loadingStakeToken } = useContract(STAKE_TOKEN_ADDRESSES)
    const { data: tokenBalance, isLoading: loadingTokenBalance } = useTokenBalance(stakeTokenContract, address)



  return (
    <Card p={5}>
        <Stack>
            <Heading>Stake Token</Heading>
            {/* displaying stake contract stats */}
            <Skeleton h={4} w={"50%"} isLoaded={!loadingStakeToken && !loadingTokenBalance}>
                <Text fontSize={"large"} fontWeight={"bold"}>${tokenBalance?.symbol}</Text>
            </Skeleton>

            <Skeleton h={4} w={"100%"} isLoaded={!loadingStakeToken && !loadingTokenBalance}>
                <Text>{tokenBalance?.displayValue}</Text>
            </Skeleton>
            
        </Stack>
    </Card>
  )
}

export default StakeToken