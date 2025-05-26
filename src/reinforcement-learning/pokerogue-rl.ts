import { globalScene } from "../global-scene";

export class PokerogueRL {
  constructor() {}

    async skipToNextPhase(currentPhase, interval_ms) {
        while (globalScene.currentPhase.constructor.name === currentPhase) {
            globalScene.uiInputs.buttonTouch();
            await new Promise(res => setTimeout(res, interval_ms));
        }
        return true;
    }
}
