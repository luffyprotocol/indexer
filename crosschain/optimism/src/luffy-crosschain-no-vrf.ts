import {
  BetAmountSet as BetAmountSetEvent,
  BetPlaced as BetPlacedEvent,
  CrosschainAddressesSet as CrosschainAddressesSetEvent,
  CrosschainMessageSent as CrosschainMessageSentEvent,
  CrosschainReceived as CrosschainReceivedEvent,
  OwnershipTransferRequested as OwnershipTransferRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/LuffyCrosschainNoVRF/LuffyCrosschainNoVRF"
import {
  BetAmountSet,
  BetPlaced,
  CrosschainAddressesSet,
  CrosschainMessageSent,
  CrosschainReceived,
  OwnershipTransferRequested,
  OwnershipTransferred
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

export function handleCrosschainMessageSent(
  event: CrosschainMessageSentEvent
): void {
  let entity = new CrosschainMessageSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.messageId = event.params.messageId

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
