import { BigInt } from "@graphprotocol/graph-ts";
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
  RewardsWithdrawn as RewardsWithdrawnEvent,
} from "../generated/LuffyProtocol/LuffyProtocol";
import {
  game as Game,
  prediction as Prediction,
  user as User,
  claim as Claim,
  reward as Reward,
} from "../generated/schema";

export function handleGamePlayerIdRemappingSet(
  event: GamePlayerIdRemappingSetEvent
): void {
  let game = Game.load(event.params.gameId.toHexString());
  if (game == null) {
    game = new Game(event.params.gameId.toHexString());
    game.playerIdRemapping = event.params.remapping;
    game.setTime = event.block.timestamp;
    game.predictionsStartsIn = event.params._startsIn;
    game.transactionHash = event.transaction.hash;
    game.save();
  }
}

export function handleBetPlaced(event: BetPlacedEvent): void {
  let user = User.load(event.params.caller.toHexString());
  if (user == null) {
    user = new User(event.params.caller.toHexString().toLowerCase());
    user.address = event.params.caller;
    user.totalGamesClaimed = BigInt.fromI32(0);
    user.totalPointsWon = BigInt.fromI32(0);
    user.totalSpent = BigInt.fromI32(0);
    user.totalGamesPlayed = BigInt.fromI32(0);
    user.totalClaimmables = BigInt.fromI32(0);
    user.totalEarnings = BigInt.fromI32(0);
  }

  let prediction = Prediction.load(
    event.params.gameId.toHexString() + "-" + event.params.caller.toHexString()
  );
  if (prediction == null) {
    prediction = new Prediction(
      event.params.gameId.toHexString() +
        "-" +
        event.params.caller.toHexString()
    );
    user.totalGamesPlayed = user.totalGamesPlayed.plus(BigInt.fromI32(1));
    user.totalSpent = user.totalSpent.plus(event.params.Prediction.amountInWei);
    prediction.game = event.params.gameId.toHexString();
    prediction.user = event.params.caller.toHexString();
  }
  prediction.squadHash = event.params.Prediction.squadHash;
  prediction.transactionHash = event.transaction.hash;
  prediction.amount = event.params.Prediction.amountInWei;
  prediction.captain = BigInt.fromI32(event.params.Prediction.captain);
  prediction.viceCaptain = BigInt.fromI32(event.params.Prediction.viceCaptain);
  prediction.usedRandomness = event.params.Prediction.isRandom;
  prediction.token = BigInt.fromI32(event.params.Prediction.token);
  user.save();
  prediction.save();
}

export function handleOracleResultsPublished(
  event: OracleResultsPublishedEvent
): void {
  let game = Game.load(event.params.gameId.toHexString());
  if (game != null) {
    game.resultsPublishedTime = event.block.timestamp;
    game.pointsMerkleRoot = event.params.pointsMerkleRoot;
    game.gameResults = event.params.pointsIpfsHash;
    game.save();
  }
}

export function handlePointsClaimed(event: PointsClaimedEvent): void {
  let user = User.load(event.params.claimer.toHexString());

  let claim = Claim.load(
    event.params.gameid.toHexString() + "-" + event.params.claimer.toHexString()
  );
  if (claim == null) {
    claim = new Claim(
      event.params.gameid.toHexString() +
        "-" +
        event.params.claimer.toHexString()
    );
    claim.game = event.params.gameid.toHexString();
    claim.user = event.params.claimer.toHexString();
    claim.prediction = claim.id;
    claim.points = event.params.totalPoints;
    claim.transactionHash = event.transaction.hash;
    if (user != null) {
      user.totalGamesClaimed = user.totalGamesClaimed.plus(BigInt.fromI32(1));
      user.totalPointsWon = user.totalPointsWon.plus(event.params.totalPoints);
      user.save();
    }
    claim.save();
  }
}

export function handleRewardsClaimed(event: RewardsClaimedEvent): void {
  let user = User.load(event.params.claimer.toHexString());
  let reward = Reward.load(
    event.params.gameId.toHexString() + "-" + event.params.claimer.toHexString()
  );
  if (reward == null) {
    reward = new Reward(
      event.params.gameId.toHexString() +
        "-" +
        event.params.claimer.toHexString()
    );
    reward.game = event.params.gameId.toHexString();
    reward.user = event.params.claimer.toHexString();
    reward.claim = reward.id;
    reward.prediction = reward.id;
    reward.amount = event.params.value;
    reward.position = BigInt.fromI32(69);
    reward.transactionHash = event.transaction.hash;
    if (user != null) {
      user.totalClaimmables = user.totalClaimmables.plus(event.params.value);
      user.totalEarnings = user.totalEarnings.plus(event.params.value);
      user.save();
    }
    reward.save();
  }
}

export function handleRewardsWithdrawn(event: RewardsWithdrawnEvent): void {
  let user = User.load(event.params.claimer.toHexString());
  if (user != null) {
    user.totalClaimmables = BigInt.fromI32(0);
    user.save();
  }
}

export function handleBetAmountSet(event: BetAmountSetEvent): void {}

export function handleCrosschainAddressesSet(
  event: CrosschainAddressesSetEvent
): void {}

export function handleCrosschainReceived(
  event: CrosschainReceivedEvent
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
