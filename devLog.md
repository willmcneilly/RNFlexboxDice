# Dev Log

*Goal* — create 6 faces of a die using flexbox.

* First thing is to create a die component. √
* Should look into RN border syntax. √
* Apply a box shadow to the die. How do they work?  √
* OK, let's get down to the pips
* Had to actually create an inner container for the die as when I added flex to the die itself it stretched the whole thing. Still not sure why.
* It would be great click on the die to cycle to the next face.
* Got the logic to dynamically set the number of pips and cycle the faces on view press. I've already come across issues with not having css selectors. Makes the styling needlessly complicated.
* The cleanest way to do this sort of thing is probably to to create components for each face
* Just tried to wrap a custom component with TouchableHighlight, turns out this can't be done without going through some complicated process. The easiest thing to do is wrap the custom component in a View component.
* Created components for Pip, Die and each of the die faces. The index is now in charge of rendering the correct die face.

## Flexbox findings

* no order property.
* no reverse flex-direction.
* no flex-wrap reverse.
* no flex flow property
* no align content.
