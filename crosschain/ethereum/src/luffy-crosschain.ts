import { BigInt } from "@graphprotocol/graph-ts";
import {
  BetAmountSet as BetAmountSetEvent,
  BetPlaced as BetPlacedEvent,
  CrosschainAddressesSet as CrosschainAddressesSetEvent,
  CrosschainReceived as CrosschainReceivedEvent,
  OwnershipTransferRequested as OwnershipTransferRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  CrosschainMessageSent as CrosschainMessageSentEvent,
} from "../generated/LuffyCrosschain/LuffyCrosschain";

import { prediction as Prediction } from "../generated/schema";

export function handleBetAmountSet(event: BetAmountSetEvent): void {}

export function handleBetPlaced(event: BetPlacedEvent): void {
  let prediction = Prediction.load(
    event.params.gameId.toHexString() + "-" + event.params.caller.toHexString()
  );
  if (prediction == null) {
    prediction = new Prediction(
      event.params.gameId.toHexString() +
        "-" +
        event.params.caller.toHexString()
    );

    prediction.game = event.params.gameId;
    prediction.user = event.params.caller;
  }
  prediction.transactionHash = event.transaction.hash;
  prediction.captain = BigInt.fromI32(event.params.Prediction.captain);
  prediction.viceCaptain = BigInt.fromI32(event.params.Prediction.viceCaptain);
  prediction.save();
}

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequestedEvent
): void {}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {}

export function handleCrosschainAddressesSet(
  event: CrosschainAddressesSetEvent
): void {}

export function handleCrosschainReceived(
  event: CrosschainReceivedEvent
): void {}

export function handleCrosschainMessageSent(
  event: CrosschainMessageSentEvent
): void {}
