import { globalScene } from "../global-scene";
import { LoginPhase } from "../phases/login-phase";

export class PokerogueRL {
  constructor() {}

  skipToNextPhase(currentPhase: string, interval_ms: integer) {
    return new Promise(resolve => {
      if (globalScene.currentPhase.constructor.name !== currentPhase) resolve(true);
      else globalScene.uiInputs.buttonTouch();

      setTimeout(() => {
        return this.skipToNextPhase(currentPhase, interval_ms);
      }, interval_ms);
    });
  }

  async skipSequence(currentPhase: string, interval_ms: integer) {
    await this.skipToNextPhase(currentPhase, interval_ms);
  }

  ab(): void {
    typeof LoginPhase;
  }
}
