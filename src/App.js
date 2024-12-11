import { Cars } from "./models/Cars.js";
import { Round } from "./models/Round.js";
import { InputHandler } from "./views/InputHandler.js";
import { OutputHandler } from "./views/OutputHandler.js";

class App {
  constructor() {
    this.input = new InputHandler();
    this.output = new OutputHandler();
  }

  async run() {
    const carInput = await this.input.carInput();
    const cars = new Cars(carInput);
    const numberInput = await this.input.numberInput();
    const round = new Round(numberInput);

    this.output.final();
    round.play(cars.carObject, this.output);
    this.output.winnerPrint(cars.carObject);
  }
}

export default App;
