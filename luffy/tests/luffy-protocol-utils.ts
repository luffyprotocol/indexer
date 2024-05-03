import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/LuffyProtocol/LuffyProtocol"

export function createClaimPointsDisabledEvent(
  gameId: BigInt
): ClaimPointsDisabled {
  let claimPointsDisabledEvent = changetype<ClaimPointsDisabled>(newMockEvent())

  claimPointsDisabledEvent.parameters = new Array()

  claimPointsDisabledEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )

  return claimPointsDisabledEvent
}

export function createGamePlayerIdRemappingSetEvent(
  gameId: BigInt,
  remapping: string
): GamePlayerIdRemappingSet {
  let gamePlayerIdRemappingSetEvent = changetype<GamePlayerIdRemappingSet>(
    newMockEvent()
  )

  gamePlayerIdRemappingSetEvent.parameters = new Array()

  gamePlayerIdRemappingSetEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  gamePlayerIdRemappingSetEvent.parameters.push(
    new ethereum.EventParam("remapping", ethereum.Value.fromString(remapping))
  )

  return gamePlayerIdRemappingSetEvent
}

export function createOwnershipTransferRequestedEvent(
  from: Address,
  to: Address
): OwnershipTransferRequested {
  let ownershipTransferRequestedEvent = changetype<OwnershipTransferRequested>(
    newMockEvent()
  )

  ownershipTransferRequestedEvent.parameters = new Array()

  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferRequestedEvent
}

export function createOwnershipTransferredEvent(
  from: Address,
  to: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferredEvent
}

export function createPlayersMetadataUpdatedEvent(
  playersMetadataLength: BigInt,
  playersMetadata: Array<string>
): PlayersMetadataUpdated {
  let playersMetadataUpdatedEvent = changetype<PlayersMetadataUpdated>(
    newMockEvent()
  )

  playersMetadataUpdatedEvent.parameters = new Array()

  playersMetadataUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "playersMetadataLength",
      ethereum.Value.fromUnsignedBigInt(playersMetadataLength)
    )
  )
  playersMetadataUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "playersMetadata",
      ethereum.Value.fromStringArray(playersMetadata)
    )
  )

  return playersMetadataUpdatedEvent
}

export function createPointsClaimedEvent(
  gameId: BigInt,
  claimer: Address,
  totalPoints: BigInt
): PointsClaimed {
  let pointsClaimedEvent = changetype<PointsClaimed>(newMockEvent())

  pointsClaimedEvent.parameters = new Array()

  pointsClaimedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  pointsClaimedEvent.parameters.push(
    new ethereum.EventParam("claimer", ethereum.Value.fromAddress(claimer))
  )
  pointsClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "totalPoints",
      ethereum.Value.fromUnsignedBigInt(totalPoints)
    )
  )

  return pointsClaimedEvent
}

export function createRequestFulfilledEvent(id: Bytes): RequestFulfilled {
  let requestFulfilledEvent = changetype<RequestFulfilled>(newMockEvent())

  requestFulfilledEvent.parameters = new Array()

  requestFulfilledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return requestFulfilledEvent
}

export function createRequestSentEvent(id: Bytes): RequestSent {
  let requestSentEvent = changetype<RequestSent>(newMockEvent())

  requestSentEvent.parameters = new Array()

  requestSentEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return requestSentEvent
}

export function createResultsFetchFailedEvent(
  gameId: BigInt,
  requestId: Bytes,
  error: Bytes
): ResultsFetchFailed {
  let resultsFetchFailedEvent = changetype<ResultsFetchFailed>(newMockEvent())

  resultsFetchFailedEvent.parameters = new Array()

  resultsFetchFailedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  resultsFetchFailedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  resultsFetchFailedEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromBytes(error))
  )

  return resultsFetchFailedEvent
}

export function createResultsFetchInitiatedEvent(
  gameId: BigInt,
  requestId: Bytes
): ResultsFetchInitiated {
  let resultsFetchInitiatedEvent = changetype<ResultsFetchInitiated>(
    newMockEvent()
  )

  resultsFetchInitiatedEvent.parameters = new Array()

  resultsFetchInitiatedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  resultsFetchInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )

  return resultsFetchInitiatedEvent
}

export function createResultsPublishedEvent(
  gameId: BigInt,
  pointsMerkleRoot: Bytes,
  gameResults: string
): ResultsPublished {
  let resultsPublishedEvent = changetype<ResultsPublished>(newMockEvent())

  resultsPublishedEvent.parameters = new Array()

  resultsPublishedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  resultsPublishedEvent.parameters.push(
    new ethereum.EventParam(
      "pointsMerkleRoot",
      ethereum.Value.fromFixedBytes(pointsMerkleRoot)
    )
  )
  resultsPublishedEvent.parameters.push(
    new ethereum.EventParam(
      "gameResults",
      ethereum.Value.fromString(gameResults)
    )
  )

  return resultsPublishedEvent
}

export function createSquadRegisteredEvent(
  gameId: BigInt,
  squadHash: Bytes,
  registrant: Address
): SquadRegistered {
  let squadRegisteredEvent = changetype<SquadRegistered>(newMockEvent())

  squadRegisteredEvent.parameters = new Array()

  squadRegisteredEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  squadRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "squadHash",
      ethereum.Value.fromFixedBytes(squadHash)
    )
  )
  squadRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "registrant",
      ethereum.Value.fromAddress(registrant)
    )
  )

  return squadRegisteredEvent
}
