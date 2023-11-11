const assert = require("chai").assert;
const lottery = require("./Lottery");

describe("Lottery", function() {
  describe("buyLotteryTicket", function() {
    it("should throw an error if buy is false", function() {
      assert.throws(
        () => lottery.buyLotteryTicket(10, 3, false),
        "Unable to buy lottery ticket!"
      );
    });

    it("should throw an error for invalid input", function() {
      assert.throws(
        () => lottery.buyLotteryTicket("price", 3, true),
        "Invalid input!"
      );

      assert.throws(
        () => lottery.buyLotteryTicket(10, -1, true),
        "Invalid input!"
      );
    });

    it("should return the correct message for valid input", function() {
      assert.strictEqual(
        lottery.buyLotteryTicket(5, 2, true),
        "You bought 2 tickets for 10$."
      );

      assert.strictEqual(
        lottery.buyLotteryTicket(2.5, 4, true),
        "You bought 4 tickets for 10$."
      );
    });
  });

  describe("checkTicket", function() {
    it("should throw an error for invalid input", function() {
      assert.throws(
        () => lottery.checkTicket("123456", [1, 2, 3, 4, 5, 6]),
        "Invalid input!"
      );

      assert.throws(
        () =>
          lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7]),
        "Invalid input!"
      );
    });

    it("should return the correct message for winning numbers", function() {
      assert.strictEqual(
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 7]),
        "Congratulations you win, check your reward!"
      );

      assert.strictEqual(
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]),
        "You win the JACKPOT!!!"
      );
    });

    it("should return undefined for losing ticket", function() {
      assert.isUndefined(
        lottery.checkTicket([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12])
      );
    });
  });

  describe("secondChance", function() {
    it("should throw an error for invalid input", function() {
      assert.throws(
        () => lottery.secondChance("123456", [1, 2, 3, 4, 5, 6]),
        "Invalid input!"
      );

      assert.throws(
        () => lottery.secondChance(123456, "123456"),
        "Invalid input!"
      );
    });

    it("should return the correct message for winning ticket", function() {
      assert.strictEqual(
        lottery.secondChance(123, [456, 789, 123, 987]),
        "You win our second chance prize!"
      );
    });

    it("should return the correct message for losing ticket", function() {
      assert.strictEqual(
        lottery.secondChance(123, [456, 789, 111, 222]),
        "Sorry, your ticket didn't win!"
      );
    });
  });
});