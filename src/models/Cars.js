import { ERROR_MESSAGES } from "../../constants.js";
import { ErrorHandler } from "../utils/ErrorHandler.js";

export class Cars {
  carObject = {};

  constructor(cars) {
    this.#validate(cars);
    this.#seperate(cars);
  }

  #seperate(cars) {
    const carNames = cars.split(",").map((name) => name.trim());
    carNames.forEach((carName) => {
      this.carObject[carName] = 0;
    });
  }

  #validate(carInput) {
    // 빈값 입력 검증
    if (!carInput.trim()) ErrorHandler(ERROR_MESSAGES.EMPTY_STRING);

    // 자동차 이름 5자 이하 검증
    if (carInput.split(",").some((carName) => carName.trim().length > 5))
      ErrorHandler(ERROR_MESSAGES.MAX_STRING);

    // 자동차 이름 중복 검증
    if (new Set(carInput.split(",")).size !== carInput.split(",").length) {
      ErrorHandler(ERROR_MESSAGES.DUPLICATE_STRING);
    }
  }
}
