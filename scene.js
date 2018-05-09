import { lenses as sceneLenses } from "./scenes.js";
import { setAction } from "./set.js";

export const currentSceneLens = R.lensPath(["currentScene"]);
export const currentPassageLens = R.lensPath(["currentPassage"]);

export const sceneSubscriber = sceneElement => next => state => {
  const scenePassages = R.compose(
    R.view(sceneLenses.passages),
    R.view(currentSceneLens)
  )(state);
  const passageIndex = R.view(currentPassageLens, state);
  const passageAmount = scenePassages.length;
  if (passageIndex < passageAmount) {
    const passageText = R.compose(
      R.view(sceneLenses.passage),
      R.view(R.lensPath([passageIndex]))
    )(scenePassages);
    const passageInterval = R.compose(
      R.view(sceneLenses.passageInterval),
      R.view(R.lensPath([passageIndex]))
    )(scenePassages);
    setTimeout(() => {
      const passageDiv = document.createElement("div");
      passageDiv.classList.add("fadeInBegin");
      passageDiv.appendChild(document.createTextNode(passageText));
      sceneElement.appendChild(passageDiv);
      setTimeout(() => {
        passageDiv.classList.add("fadeInEnd");
      }, 0);
      next(setAction([currentPassageLens, passageIndex + 1]));
    }, passageInterval);
  }
};
