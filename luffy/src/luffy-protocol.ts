import {
  ClaimPointsDisabled as ClaimPointsDisabledEvent,
  GamePlayerIdRemappingSet as GamePlayerIdRemappingSetEvent,
  OwnershipTransferRequested as OwnershipTransferRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PlayersMetadataUpdated as PlayersMetadataUpdatedEvent,
  PointsClaimed as PointsClaimedEvent,
  RequestFulfilled as RequestFulfilledEvent,
  RequestSent as RequestSentEvent,
  ResultsFetchFailed as ResultsFetchFailedEvent,
  ResultsFetchInitiated as ResultsFetchInitiatedEvent,
  ResultsPublished as ResultsPublishedEvent,
  SquadRegistered as SquadRegisteredEvent
} from "../generated/LuffyProtocol/LuffyProtocol"
import {
  ClaimPointsDisabled,
  GamePlayerIdRemappingSet,
  OwnershipTransferRequested,
  OwnershipTransferred,
  PlayersMetadataUpdated,
  PointsClaimed,
  RequestFulfilled,
  RequestSent,
  ResultsFetchFailed,
  ResultsFetchInitiated,
  ResultsPublished,
  SquadRegistered
} from "../generated/schema"

export function handleClaimPointsDisabled(
  event: ClaimPointsDisabledEvent
): void {
  let entity = new ClaimPointsDisabled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gameId = event.params.gameId

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
  entity.remapping = event.params.remapping

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

export function handlePlayersMetadataUpdated(
  event: PlayersMetadataUpdatedEvent
): void {
  let entity = new PlayersMetadataUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.playersMetadataLength = event.params.playersMetadataLength
  entity.playersMetadata = event.params.playersMetadata

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePointsClaimed(event: PointsClaimedEvent): void {
  let entity = new PointsClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gameId = event.params.gameId
  entity.claimer = event.params.claimer
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

export function handleResultsFetchFailed(event: ResultsFetchFailedEvent): void {
  let entity = new ResultsFetchFailed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gameId = event.params.gameId
  entity.requestId = event.params.requestId
  entity.error = event.params.error

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleResultsFetchInitiated(
  event: ResultsFetchInitiatedEvent
): void {
  let entity = new ResultsFetchInitiated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gameId = event.params.gameId
  entity.requestId = event.params.requestId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleResultsPublished(event: ResultsPublishedEvent): void {
  let entity = new ResultsPublished(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gameId = event.params.gameId
  entity.pointsMerkleRoot = event.params.pointsMerkleRoot
  entity.gameResults = event.params.gameResults

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSquadRegistered(event: SquadRegisteredEvent): void {
  let entity = new SquadRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gameId = event.params.gameId
  entity.squadHash = event.params.squadHash
  entity.registrant = event.params.registrant

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
