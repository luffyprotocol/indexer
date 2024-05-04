import { BigInt } from "@graphprotocol/graph-ts";
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
  SquadRegistered as SquadRegisteredEvent,
} from "../generated/LuffyProtocol/LuffyProtocol";
import {
  game as Game,
  prediction as Prediction,
  user as User,
  claim as Claim,
} from "../generated/schema";

export function handleGamePlayerIdRemappingSet(
  event: GamePlayerIdRemappingSetEvent
): void {
  let game = Game.load(event.params.gameId.toHexString());
  if (game == null) {
    game = new Game(event.params.gameId.toHexString());
    game.playerIdRemapping = event.params.remapping;
    game.predictionsStartTime = event.block.timestamp;
    game.transactionHash = event.transaction.hash;
    game.save();
  }
}

export function handleSquadRegistered(event: SquadRegisteredEvent): void {
  let user = User.load(event.params.registrant.toHexString());
  if (user == null) {
    user = new User(event.params.registrant.toHexString());
    user.address = event.params.registrant;
    user.totalGamesClaimed = BigInt.fromI32(0);
    user.totalPointsWon = BigInt.fromI32(0);
    user.totalGamesPlayed = BigInt.fromI32(0);
  }

  let prediction = Prediction.load(
    event.params.gameId.toHexString() +
      "-" +
      event.params.registrant.toHexString()
  );
  if (prediction == null) {
    prediction = new Prediction(
      event.params.gameId.toHexString() +
        "-" +
        event.params.registrant.toHexString()
    );
    user.totalGamesPlayed = user.totalGamesPlayed.plus(BigInt.fromI32(1));
    prediction.game = event.params.gameId.toHexString();
    prediction.user = event.params.registrant.toHexString();
    prediction.save();
  }
  prediction.squadHash = event.params.squadHash;
  prediction.transactionHash = event.transaction.hash;
  user.save();
}

export function handleResultsPublished(event: ResultsPublishedEvent): void {
  let game = Game.load(event.params.gameId.toHexString());
  if (game != null) {
    game.resultsPublishedTime = event.block.timestamp;
    game.pointsMerkleRoot = event.params.pointsMerkleRoot;
    game.gameResults = event.params.gameResults;
    game.save();
  }
}

export function handlePointsClaimed(event: PointsClaimedEvent): void {
  let user = User.load(event.params.claimer.toHexString());
  if (user != null) {
    user.totalGamesClaimed = user.totalGamesClaimed.plus(BigInt.fromI32(1));
    user.totalPointsWon = user.totalPointsWon.plus(event.params.totalPoints);
    user.save();
  }
  let claim = Claim.load(
    event.params.gameId.toHexString() + "-" + event.params.claimer.toHexString()
  );
  if (claim == null) {
    claim = new Claim(
      event.params.gameId.toHexString() +
        "-" +
        event.params.claimer.toHexString()
    );
    claim.game = event.params.gameId.toHexString();
    claim.user = event.params.claimer.toHexString();
    claim.prediction = claim.id;
    claim.points = event.params.totalPoints;
    claim.transactionHash = event.transaction.hash;
    claim.save();
  }
  let prediction = Prediction.load(
    event.params.gameId.toHexString() + "-" + event.params.claimer.toHexString()
  );
  if (prediction != null) {
    prediction.claim = claim.id;
    prediction.save();
  }
}

export function handlePlayersMetadataUpdated(
  event: PlayersMetadataUpdatedEvent
): void {}
export function handleResultsFetchFailed(
  event: ResultsFetchFailedEvent
): void {}

export function handleResultsFetchInitiated(
  event: ResultsFetchInitiatedEvent
): void {}

export function handleRequestFulfilled(event: RequestFulfilledEvent): void {}

export function handleRequestSent(event: RequestSentEvent): void {}

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequestedEvent
): void {}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {}

export function handleClaimPointsDisabled(
  event: ClaimPointsDisabledEvent
): void {}
