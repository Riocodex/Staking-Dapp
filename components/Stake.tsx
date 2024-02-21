import { Box, Card, Flex, Heading, Input, SimpleGrid, Skeleton, Stack, Text, useToast } from "@chakra-ui/react"
import { Web3Button, useAddress, useContract, useContractRead, useTokenBalance } from "@thirdweb-dev/react"
import { REWARD_TOKEN_ADDRESSES, STAKE_TOKEN_ADDRESSES, STAKE_CONTRACT_ADDRESSES } from "../constants/addresses"
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

const Stake = () => {
    const address = useAddress();
    const {
        contract: stakeTokenContract
    } = useContract(STAKE_TOKEN_ADDRESSES, "token");
    const {
        contract: rewardTokenContract
    }
        = useContract(REWARD_TOKEN_ADDRESSES, "token")
    const {
        contract: stakeContract
    } = useContract(STAKE_CONTRACT_ADDRESSES,"custom");
    
    const {
        data: stakeTokenBalance,
        isLoading: loadingStakeTokenbalance
    } = useTokenBalance(
        stakeTokenContract,
        address
    )

    const {
        data: rewardTokenBalance,
        isLoading: loadingRewardTokenBalance
    } = useTokenBalance(
            rewardTokenContract,
            address
        )


  return (
    <div>Stake</div>
  )
}

export default Stake