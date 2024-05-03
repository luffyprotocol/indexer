import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { ClaimPointsDisabled } from "../generated/schema"
import { ClaimPointsDisabled as ClaimPointsDisabledEvent } from "../generated/LuffyProtocol/LuffyProtocol"
import { handleClaimPointsDisabled } from "../src/luffy-protocol"
import { createClaimPointsDisabledEvent } from "./luffy-protocol-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let gameId = BigInt.fromI32(234)
    let newClaimPointsDisabledEvent = createClaimPointsDisabledEvent(gameId)
    handleClaimPointsDisabled(newClaimPointsDisabledEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ClaimPointsDisabled created and stored", () => {
    assert.entityCount("ClaimPointsDisabled", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ClaimPointsDisabled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "gameId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
