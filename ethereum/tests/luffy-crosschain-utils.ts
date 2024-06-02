import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  BetAmountSet,
  BetPlaced,
  CrosschainAddressesSet,
  CrosschainMessageSent,
  CrosschainReceived,
  OwnershipTransferRequested,
  OwnershipTransferred
} from "../generated/LuffyCrosschain/LuffyCrosschain"

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
  caller: Address,
  Prediction: ethereum.Tuple
): BetPlaced {
  let betPlacedEvent = changetype<BetPlaced>(newMockEvent())

  betPlacedEvent.parameters = new Array()

  betPlacedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  betPlacedEvent.parameters.push(
    new ethereum.EventParam("Prediction", ethereum.Value.fromTuple(Prediction))
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

export function createCrosschainMessageSentEvent(
  messageId: Bytes
): CrosschainMessageSent {
  let crosschainMessageSentEvent = changetype<CrosschainMessageSent>(
    newMockEvent()
  )

  crosschainMessageSentEvent.parameters = new Array()

  crosschainMessageSentEvent.parameters.push(
    new ethereum.EventParam(
      "messageId",
      ethereum.Value.fromFixedBytes(messageId)
    )
  )

  return crosschainMessageSentEvent
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
