# odin-etch
Etch-a-sketch for the Odin Project

This version has several features:
- Dynamically resizes with browser window, to a predefined max size. I.e. if reduce size of browser window, the grid shrinks.
- Green theme.
- Light randomisation of colour within green theme.
- Opacity is initially set at 25% and increases by 25% each time the square is coloured.

I decided to use the mouseleave event as I found this had good performance (no bubbling by default) and the trail of squares *behind* the mouse pointer encouraged the user to slow down their mouse movement.

Maximum size set to 100 as recommended by TOP, I found that above this while the grid worked the responsiveness to mouse movement was not good enough.