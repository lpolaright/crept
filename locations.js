export const lenses = {
  id: R.lensPath(["id"]),
  name: R.lensPath(["name"]),
  connections: R.lensPath(["connections"]),
  locations: {
    street: R.lensPath([0]),
    buildingEntrance: R.lensPath([1]),
    mainHall: R.lensPath([2]),
    apartmentHallway: R.lensPath([3]),
    apartment2208Door: R.lensPath([4]),
    hallway: R.lensPath([5]),
    livingRoom: R.lensPath([6]),
    bedroom: R.lensPath([7])
  }
};

export default [
  R.compose(
    R.set(lenses.id, 0),
    R.set(lenses.name, "street"),
    R.set(lenses.connections, [1])
  )({}),
  R.compose(
    R.set(lenses.id, 1),
    R.set(lenses.name, "building entrance"),
    R.set(lenses.connections, [0, 2])
  )({}),
  R.compose(
    R.set(lenses.id, 2),
    R.set(lenses.name, "main hall"),
    R.set(lenses.connections, [1, 3])
  )({}),
  R.compose(
    R.set(lenses.id, 3),
    R.set(lenses.name, "apartment hallway"),
    R.set(lenses.connections, [2, 4])
  )({}),
  R.compose(
    R.set(lenses.id, 4),
    R.set(lenses.name, "apartment 2208 door"),
    R.set(lenses.connections, [3, 5])
  )({}),
  R.compose(
    R.set(lenses.id, 5),
    R.set(lenses.name, "hallway"),
    R.set(lenses.connections, [4, 6])
  )({}),
  R.compose(
    R.set(lenses.id, 6),
    R.set(lenses.name, "living room"),
    R.set(lenses.connections, [5, 7])
  )({}),
  R.compose(
    R.set(lenses.id, 7),
    R.set(lenses.name, "bedroom"),
    R.set(lenses.connections, [6])
  )({})
];
