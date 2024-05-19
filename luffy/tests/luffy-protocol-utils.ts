import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  BetAmountSet,
  BetPlaced,
  CrosschainAddressesSet,
  CrosschainReceived,
  GamePlayerIdRemappingSet,
  NewTokensWhitelisted,
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
} from "../generated/LuffyProtocol/LuffyProtocol"

export function createBetAmountSetEvent(amount: BigInt): BetAmountSet {
  let betAmountSetEvent = changetype<BetAmountSet>(newMockEvent())

  betAmountSetEvent.parameters = new Array()

  betAmountSetEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return betAmountSetEvent
}

export function createBetPlacedEvent(
  gameId: BigInt,
  squadHash: Bytes,
  caller: Address,
  amount: BigInt
): BetPlaced {
  let betPlacedEvent = changetype<BetPlaced>(newMockEvent())

  betPlacedEvent.parameters = new Array()

  betPlacedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "squadHash",
      ethereum.Value.fromFixedBytes(squadHash)
    )
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return betPlacedEvent
}

export function createCrosschainAddressesSetEvent(
  destinationSelectors: Array<BigInt>,
  destinationAddresses: Array<Address>
): CrosschainAddressesSet {
  let crosschainAddressesSetEvent = changetype<CrosschainAddressesSet>(
    newMockEvent()
  )

  crosschainAddressesSetEvent.parameters = new Array()

  crosschainAddressesSetEvent.parameters.push(
    new ethereum.EventParam(
      "destinationSelectors",
      ethereum.Value.fromUnsignedBigIntArray(destinationSelectors)
    )
  )
  crosschainAddressesSetEvent.parameters.push(
    new ethereum.EventParam(
      "destinationAddresses",
      ethereum.Value.fromAddressArray(destinationAddresses)
    )
  )

  return crosschainAddressesSetEvent
}

export function createCrosschainReceivedEvent(
  messageId: Bytes
): CrosschainReceived {
  let crosschainReceivedEvent = changetype<CrosschainReceived>(newMockEvent())

  crosschainReceivedEvent.parameters = new Array()

  crosschainReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "messageId",
      ethereum.Value.fromFixedBytes(messageId)
    )
  )

  return crosschainReceivedEvent
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

export function createNewTokensWhitelistedEvent(
  betTokens: Array<Address>
): NewTokensWhitelisted {
  let newTokensWhitelistedEvent = changetype<NewTokensWhitelisted>(
    newMockEvent()
  )

  newTokensWhitelistedEvent.parameters = new Array()

  newTokensWhitelistedEvent.parameters.push(
    new ethereum.EventParam(
      "betTokens",
      ethereum.Value.fromAddressArray(betTokens)
    )
  )

  return newTokensWhitelistedEvent
}

export function createOracleRequestSentEvent(
  requestId: Bytes,
  gameId: BigInt
): OracleRequestSent {
  let oracleRequestSentEvent = changetype<OracleRequestSent>(newMockEvent())

  oracleRequestSentEvent.parameters = new Array()

  oracleRequestSentEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  oracleRequestSentEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )

  return oracleRequestSentEvent
}

export function createOracleResponseFailedEvent(
  requestId: Bytes,
  err: Bytes
): OracleResponseFailed {
  let oracleResponseFailedEvent = changetype<OracleResponseFailed>(
    newMockEvent()
  )

  oracleResponseFailedEvent.parameters = new Array()

  oracleResponseFailedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  oracleResponseFailedEvent.parameters.push(
    new ethereum.EventParam("err", ethereum.Value.fromBytes(err))
  )

  return oracleResponseFailedEvent
}

export function createOracleResponseSuccessEvent(
  requestId: Bytes,
  response: Bytes
): OracleResponseSuccess {
  let oracleResponseSuccessEvent = changetype<OracleResponseSuccess>(
    newMockEvent()
  )

  oracleResponseSuccessEvent.parameters = new Array()

  oracleResponseSuccessEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  oracleResponseSuccessEvent.parameters.push(
    new ethereum.EventParam("response", ethereum.Value.fromBytes(response))
  )

  return oracleResponseSuccessEvent
}

export function createOracleResultsPublishedEvent(
  requestId: Bytes,
  gameId: BigInt,
  pointsMerkleRoot: Bytes,
  pointsIpfsHash: string
): OracleResultsPublished {
  let oracleResultsPublishedEvent = changetype<OracleResultsPublished>(
    newMockEvent()
  )

  oracleResultsPublishedEvent.parameters = new Array()

  oracleResultsPublishedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  oracleResultsPublishedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  oracleResultsPublishedEvent.parameters.push(
    new ethereum.EventParam(
      "pointsMerkleRoot",
      ethereum.Value.fromFixedBytes(pointsMerkleRoot)
    )
  )
  oracleResultsPublishedEvent.parameters.push(
    new ethereum.EventParam(
      "pointsIpfsHash",
      ethereum.Value.fromString(pointsIpfsHash)
    )
  )

  return oracleResultsPublishedEvent
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

export function createPointsClaimedEvent(
  gameid: BigInt,
  claimer: Address,
  totalPoints: BigInt
): PointsClaimed {
  let pointsClaimedEvent = changetype<PointsClaimed>(newMockEvent())

  pointsClaimedEvent.parameters = new Array()

  pointsClaimedEvent.parameters.push(
    new ethereum.EventParam("gameid", ethereum.Value.fromUnsignedBigInt(gameid))
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

export function createRewardsClaimedEvent(
  gameId: BigInt,
  claimer: Address,
  value: BigInt
): RewardsClaimed {
  let rewardsClaimedEvent = changetype<RewardsClaimed>(newMockEvent())

  rewardsClaimedEvent.parameters = new Array()

  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam("claimer", ethereum.Value.fromAddress(claimer))
  )
  rewardsClaimedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return rewardsClaimedEvent
}

export function createRewardsWithdrawnEvent(
  claimer: Address,
  value: BigInt
): RewardsWithdrawn {
  let rewardsWithdrawnEvent = changetype<RewardsWithdrawn>(newMockEvent())

  rewardsWithdrawnEvent.parameters = new Array()

  rewardsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("claimer", ethereum.Value.fromAddress(claimer))
  )
  rewardsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return rewardsWithdrawnEvent
}
