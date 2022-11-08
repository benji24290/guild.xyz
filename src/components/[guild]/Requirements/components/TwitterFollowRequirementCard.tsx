import { Icon } from "@chakra-ui/react"
import Link from "components/common/Link"
import { TwitterLogo } from "phosphor-react"
import { Requirement } from "types"
import ConnectRequirementPlatformButton from "./common/ConnectRequirementPlatformButton"
import RequirementCard from "./common/RequirementCard"

type Props = {
  requirement: Requirement
}

const TwitterFollowRequirementCard = ({ requirement, ...rest }: Props) => (
  <RequirementCard
    image={
      requirement.data.id ? (
        typeof window !== "undefined" ? (
          `${window.origin}/api/twitter-avatar?username=${requirement.data.id}`
        ) : (
          "/default_twitter_icon.png"
        )
      ) : (
        <Icon as={TwitterLogo} boxSize={6} />
      )
    }
    footer={<ConnectRequirementPlatformButton platform="TWITTER" />}
    {...rest}
  >
    {`Follow `}
    <Link
      href={`https://twitter.com/${requirement.data.id}`}
      isExternal
      colorScheme={"blue"}
      fontWeight="medium"
    >
      @{requirement.data.id}
    </Link>
    {` on Twitter`}
  </RequirementCard>
)

export default TwitterFollowRequirementCard