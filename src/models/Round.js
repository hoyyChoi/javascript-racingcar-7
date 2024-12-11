import { Random } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES, MOVE_OR_STOP_FLAG } from "../../constants.js";
import { ErrorHandler } from "../utils/ErrorHandler.js";
import { OutputHandler } from "../views/OutputHandler.js";

export class Round {
  #numberInput;
  constructor(numberInput) {
    this.#validateNumberInput(numberInput);
    this.#numberInput = numberInput;
  }

  /**
   * Description placeholder
   *
   * @param {*} carObject
   * @param {OutputHandler} roundPrint
   */
  play(carObject, roundPrint) {
    for (let i = 0; i < this.#numberInput; i++) {
      this.#simulate(carObject);
      roundPrint.roundPrint(carObject);
    }
  }

  #simulate(carObject) {
    Object.keys(carObject).forEach((carName) => {
      if (this.#moveOrStop()) carObject[carName]++;
    });
  }

  #moveOrStop() {
    return Random.pickNumberInRange(0, 9) >= MOVE_OR_STOP_FLAG;
  }

  // 횟수 입력 검증 함수
  #validateNumberInput(numberInput) {
    // 빈값 입력 검증
    if (!numberInput || !numberInput.trim())
      ErrorHandler(ERROR_MESSAGES.EMPTY_STRING);

    // 양의 정수 검증
    if (!/^[1-9]\d*$/.test(numberInput))
      ErrorHandler(ERROR_MESSAGES.INVALID_NUMBER);
  }
}
