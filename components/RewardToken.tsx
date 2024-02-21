import { Card, Heading, Skeleton, Stack, Text } from "@chakra-ui/react"
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react"
import { REWARD_TOKEN_ADDRESSES } from "../constants/addresses"

//displaying reward tokens
const RewardToken = () => {
    const address = useAddress();
    const { contract: rewardTokenContract, isLoading: loadingRewardToken } = useContract(REWARD_TOKEN_ADDRESSES);
    const { data: tokenBalance, isLoading: loadingTokenBalance } = useTokenBalance(rewardTokenContract, address);

    return(
        <Card p ={5} >
            <Stack>
                <Heading>Reward Token</Heading>
                <Skeleton h={4} w={"50%"} isLoaded={!loadingRewardToken && !loadingTokenBalance}>
                <Text fontSize={"large"} fontWeight={"bold"}>${tokenBalance?.symbol}</Text>
                </Skeleton>
                <Skeleton h={4} w={"100%"} isLoaded={!loadingRewardToken && !loadingTokenBalance}>
                    <Text>{tokenBalance?.displayValue}</Text>
                </Skeleton>
                
            </Stack>
        </Card>
    )


  return (
    <div>RewardToken</div>
  )
}

export default RewardToken