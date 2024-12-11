import { Console } from "@woowacourse/mission-utils";

export class InputHandler {
  async Input(prompt) {
    const value = await Console.readLineAsync(prompt);
    return value;
  }

  carInput() {
    return this.Input(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
  }
  numberInput() {
    return this.Input("시도할 횟수는 몇 회인가요?\n");
  }
}
