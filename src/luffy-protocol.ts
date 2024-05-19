import {
  BetAmountSet as BetAmountSetEvent,
  BetPlaced as BetPlacedEvent,
  CrosschainAddressesSet as CrosschainAddressesSetEvent,
  CrosschainReceived as CrosschainReceivedEvent,
  GamePlayerIdRemappingSet as GamePlayerIdRemappingSetEvent,
  NewTokensWhitelisted as NewTokensWhitelistedEvent,
  OracleRequestSent as OracleRequestSentEvent,
  OracleResponseFailed as OracleResponseFailedEvent,
  OracleResponseSuccess as OracleResponseSuccessEvent,
  OracleResultsPublished as OracleResultsPublishedEvent,
  OwnershipTransferRequested as OwnershipTransferRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PointsClaimed as PointsClaimedEvent,
  RequestFulfilled as RequestFulfilledEvent,
  RequestSent as RequestSentEvent,
  RewardsClaimed as RewardsClaimedEvent,
  RewardsWithdrawn as RewardsWithdrawnEvent,
} from "../generated/LuffyProtocol/LuffyProtocol";
import {
  game as Game,
  prediction as Prediction,
  user as User,
  claim as Claim,
  reward as Reward,
} from "../generated/schema";
export function handleBetPlaced(event: BetPlacedEvent): void {}

export function handleOracleResultsPublished(
  event: OracleResultsPublishedEvent
): void {}

export function handlePointsClaimed(event: PointsClaimedEvent): void {}

export function handleBetAmountSet(event: BetAmountSetEvent): void {}

export function handleRewardsClaimed(event: RewardsClaimedEvent): void {}

export function handleRewardsWithdrawn(event: RewardsWithdrawnEvent): void {}

export function handleCrosschainAddressesSet(
  event: CrosschainAddressesSetEvent
): void {}

export function handleCrosschainReceived(
  event: CrosschainReceivedEvent
): void {}

export function handleGamePlayerIdRemappingSet(
  event: GamePlayerIdRemappingSetEvent
): void {}

export function handleNewTokensWhitelisted(
  event: NewTokensWhitelistedEvent
): void {}

export function handleOracleRequestSent(event: OracleRequestSentEvent): void {}

export function handleOracleResponseFailed(
  event: OracleResponseFailedEvent
): void {}

export function handleOracleResponseSuccess(
  event: OracleResponseSuccessEvent
): void {}

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequestedEvent
): void {}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {}

export function handleRequestFulfilled(event: RequestFulfilledEvent): void {}

export function handleRequestSent(event: RequestSentEvent): void {}
