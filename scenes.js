export const lenses = {
  id: R.lensPath(["id"]),
  name: R.lensPath(["name"]),
  passage: R.lensPath(["passage"]),
  passageInterval: R.lensPath(["passageInterval"]),
  passages: R.lensPath(["passages"]),
  location: R.lensPath(["location"]),
  occureOn: R.lensPath(["occureOn"]),
  soundCue: R.lensPath(["soundCue"]),
  scenes: {
    hotelIncidnet: R.lensPath([0])
  }
};

const passages = [
  R.compose(
    R.set(lenses.id, 0),
    R.set(lenses.passage, `...it's a rainy morning.`),
    R.set(lenses.passageInterval, 1000),
    R.set(lenses.soundCue, "street_rain.wav")
  )({}),
  R.compose(
    R.set(lenses.id, 1),
    R.set(
      lenses.passage,
      `You listen to your favorite newscast on your phone
    on your way home to sleep after a long night shift.`
    ),
    R.set(lenses.passageInterval, 2000)
  )({})
];

export default [
  R.compose(
    R.set(lenses.id, 0),
    R.set(lenses.name, "The Hotel Incident"),
    R.set(lenses.location, 0),
    R.set(lenses.passages, passages)
  )({})
];
