import { action } from "./action.js";

export const errorLens = R.lensPath(["error"]);
export const errorAction = action("error");

let errorCache = "";
export const errorSubscriber = alertElement => next => state => {
  const currentError = R.view(errorLens, state);
  if (R.not(R.isNil(currentError))) {
    alertElement.style["display"] = R.isEmpty(currentError) ? "none" : "block";
    alertElement.textContent = currentError;
    errorCache = currentError;
  }
};
