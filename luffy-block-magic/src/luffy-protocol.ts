import {
  BetAmountSet as BetAmountSetEvent,
  BetPlaced as BetPlacedEvent,
  CrosschainAddressesSet as CrosschainAddressesSetEvent,
  CrosschainReceived as CrosschainReceivedEvent,
  GamePlayerIdRemappingSet as GamePlayerIdRemappingSetEvent,
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
  RewardsWithdrawn as RewardsWithdrawnEvent
} from "../generated/LuffyProtocol/LuffyProtocol"
import {
  BetAmountSet,
  BetPlaced,
  CrosschainAddressesSet,
  CrosschainReceived,
  GamePlayerIdRemappingSet,
  OracleRequestSent,
  OracleResponseFailed,
  OracleResponseSuccess,
  OracleResultsPublished,
  OwnershipTransferRequested,
  OwnershipTransferred,
  PointsClaimed,
  RequestFulfilled,
  RequestSent,
  RewardsClaimed,
  RewardsWithdrawn
} from "../generated/schema"

export function handleBetAmountSet(event: BetAmountSetEvent): void {
  let entity = new BetAmountSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBetPlaced(event: BetPlacedEvent): void {
  let entity = new BetPlaced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gameId = event.params.gameId
  entity.caller = event.params.caller
  entity.Prediction_squadHash = event.params.Prediction.squadHash
  entity.Prediction_amountInWei = event.params.Prediction.amountInWei
  entity.Prediction_token = event.params.Prediction.token
  entity.Prediction_captain = event.params.Prediction.captain
  entity.Prediction_viceCaptain = event.params.Prediction.viceCaptain
  entity.Prediction_isRandom = event.params.Prediction.isRandom

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCrosschainAddressesSet(
  event: CrosschainAddressesSetEvent
): void {
  let entity = new CrosschainAddressesSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.destinationSelectors = event.params.destinationSelectors
  entity.destinationAddresses = event.params.destinationAddresses

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCrosschainReceived(event: CrosschainReceivedEvent): void {
  let entity = new CrosschainReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.messageId = event.params.messageId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGamePlayerIdRemappingSet(
  event: GamePlayerIdRemappingSetEvent
): void {
  let entity = new GamePlayerIdRemappingSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gameId = event.params.gameId
  entity._startsIn = event.params._startsIn
  entity.remapping = event.params.remapping

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOracleRequestSent(event: OracleRequestSentEvent): void {
  let entity = new OracleRequestSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.gameId = event.params.gameId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOracleResponseFailed(
  event: OracleResponseFailedEvent
): void {
  let entity = new OracleResponseFailed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.err = event.params.err

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOracleResponseSuccess(
  event: OracleResponseSuccessEvent
): void {
  let entity = new OracleResponseSuccess(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.response = event.params.response

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOracleResultsPublished(
  event: OracleResultsPublishedEvent
): void {
  let entity = new OracleResultsPublished(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.gameId = event.params.gameId
  entity.pointsMerkleRoot = event.params.pointsMerkleRoot
  entity.pointsIpfsHash = event.params.pointsIpfsHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequestedEvent
): void {
  let entity = new OwnershipTransferRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePointsClaimed(event: PointsClaimedEvent): void {
  let entity = new PointsClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gameid = event.params.gameid
  entity.claimer = event.params.claimer
  entity.playerIds = event.params.playerIds
  entity.totalPoints = event.params.totalPoints

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestFulfilled(event: RequestFulfilledEvent): void {
  let entity = new RequestFulfilled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.LuffyProtocol_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestSent(event: RequestSentEvent): void {
  let entity = new RequestSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.LuffyProtocol_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardsClaimed(event: RewardsClaimedEvent): void {
  let entity = new RewardsClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gameId = event.params.gameId
  entity.claimer = event.params.claimer
  entity.value = event.params.value
  entity.position = event.params.position

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardsWithdrawn(event: RewardsWithdrawnEvent): void {
  let entity = new RewardsWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.claimer = event.params.claimer
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
