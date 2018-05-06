import locations, { lenses as locationLenses } from "./locations.js";
import {
  movementReducer,
  locationLens,
  movementProcessor
} from "./movement.js";
import { errorAction } from "./error.js";

const mainReducer = (state = {}, action) => {
  switch (action.type) {
    case "move":
      return movementReducer(action)(state);
      break;
    case "error":
      return R.set(R.lensPath(["error"]), action.payload, state);
      break;
    default:
      return state;
      break;
  }
};

const initalState = R.compose(
  R.set(locationLens, R.view(locationLenses.locations.street, locations))
)({});

const store = Redux.createStore(mainReducer, initalState);

store.subscribe(action => {
  console.log(action);
  console.log(store.getState());
});

let typedAction = "";

const ENTER_KEY = "Enter";

let hands = [{}, {}];

const PERMITTED_ACTIONS = ["move", "look", "take", "combine", "use", "put"];
const isActionPermitted = action =>
  PERMITTED_ACTIONS.includes(action.toLowerCase());

const submitAction = (action, typedAction) => {
  store.dispatch(errorAction(""));
  if (isActionPermitted(action)) {
    if (action === "move") {
      store.dispatch(movementProcessor(store.getState(), typedAction));
    }
  } else {
    store.dispatch(errorAction(`Sorry, you are not permitted to ${action}.`));
  }
};

const playerInput = document.getElementById("player-says");
playerInput.addEventListener("keydown", event => {
  typedAction = event.target.value;
  const structure = typedAction.split(" ");
  if (event.key === ENTER_KEY) {
    submitAction(structure[0], typedAction);
  }
});
