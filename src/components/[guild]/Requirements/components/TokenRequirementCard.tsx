import { Text } from "@chakra-ui/react"
import useTokenData from "hooks/useTokenData"
import { useEffect } from "react"
import { UseFormSetValue } from "react-hook-form"
import { Requirement } from "types"
import BlockExplorerUrl from "./common/BlockExplorerUrl"
import RequirementCard from "./common/RequirementCard"

type Props = {
  requirement: Requirement
  setValueForBalancy: UseFormSetValue<any>
}

const TokenRequirementCard = ({
  requirement,
  setValueForBalancy,
  ...rest
}: Props) => {
  const { data, isValidating } = useTokenData(requirement.chain, requirement.address)

  useEffect(() => {
    if (setValueForBalancy && data.decimals)
      setValueForBalancy("balancyDecimals", data.decimals)
  }, [setValueForBalancy, data.decimals])

  return (
    <RequirementCard
      image={
        data?.logoURI ?? (
          <Text as="span" fontWeight="bold" fontSize="xx-small">
            ERC20
          </Text>
        )
      }
      loading={!data && isValidating}
      footer={
        requirement?.type === "ERC20" && (
          <BlockExplorerUrl requirement={requirement} {...rest} />
        )
      }
      {...rest}
    >
      {`Hold ${
        requirement.data?.maxAmount
          ? `${requirement.data.minAmount} - ${requirement.data.maxAmount}`
          : requirement.data?.minAmount > 0
          ? `at least ${requirement.data?.minAmount}`
          : "any amount of"
      } ${data?.symbol ?? requirement.symbol}`}
    </RequirementCard>
  )
}

export default TokenRequirementCard
