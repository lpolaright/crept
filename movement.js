import locations, { lenses as locationLenses } from "./locations.js";
import { errorAction } from "./error.js";
import { action } from "./action.js";

export const locationLens = R.lensPath(["current-location"]);

const movementAction = action("move");
export const movementReducer = action => R.set(locationLens, action.payload);

export const movementProcessor = (state, typedAction) => {
  const permittedLocations = R.view(
    locationLenses.connections,
    R.view(locationLens, state)
  );
  const matchRes = R.map(
    locIndex =>
      R.compose(
        locName => R.contains(locName, typedAction),
        R.toLower,
        R.view(locationLenses.name),
        R.view(R.lensPath([locIndex]))
      )(locations),
    permittedLocations
  );

  const matchedLocIndex = R.findIndex(
    R.compose(R.both(R.identity, R.is(Boolean)))
  )(matchRes);

  const locationIndex = R.view(
    R.lensPath([matchedLocIndex]),
    permittedLocations
  );

  if (R.gte(locationIndex, 0)) {
    return movementAction(R.view(R.lensPath([locationIndex]), locations));
  } else {
    return errorAction("you cannot move to that location!");
  }
};
