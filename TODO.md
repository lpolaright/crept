* [x] movement basic mechanic
* [x] redux integration
* [x] movement with redux
* [x] movement error states
* [x] show error output
* [x] define how interactions work (scenes)
* [ ] define how passages work

# Interaction (Scenes)

A scene is the corner-stone of what happens.
A scene describes what happens to the player,
where the player is,
what happens in the environment,
what the player sees,
what the player can interact with,
and where the player can go.

The scene does not have to give all the details to the player,
but whatever it gives in to the player - should be directly
related to the story narrative.

A scene is usually tied to a location.

The scene may contain sound assets.

The scene may contain passages that will appear at a specific time.

A scene must adhere to the next things:

* have more than one passage, after an interval
* have location
* have a flag of visited count

A scene may have the following:

* sound cues, tied to a passage (before, during or after)

Scene {
[(Passage passage, Integer interval)]
Location location
Integer visitCount

SoundCue soundCue?
}

# Interactions (passage)

A passage is a piece of text that is displayed to the player.
The piece of text should be available to be stylized.

For stylizing text html elements can be included in.

Passage {
String message
}
