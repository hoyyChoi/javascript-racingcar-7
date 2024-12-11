import { Console } from "@woowacourse/mission-utils";

export class OutputHandler {
  final() {
    Console.print(`\n실행 결과`);
  }

  roundPrint(carObject) {
    Object.entries(carObject).forEach(([carName, value]) => {
      Console.print(`${carName} : ${"-".repeat(value)}`);
    });
    Console.print("\n");
  }

  winnerPrint(carObject) {
    const maxDistance = Math.max(...Object.values(carObject));
    const winners = Object.keys(carObject).filter(
      (carName) => carObject[carName] === maxDistance
    );
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}
