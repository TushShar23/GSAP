## Lec-1

### / Box animation

```
> GSAP is a JS animation library.It is used to make complex animations for the frontend.Gsap stands for GREEN SOCK ANIMATION PLATFORM.
> We can use GSAP after importing/linking it through CDN.
> TWEEN = animation 
> GSAP TWEEN METHODS : 

to() = Changes/moves/modify properties of an element TO some values.(intial properties to final properties)

from() = Starts animation FROM the given properties to DEFAULT VALUES.(final properties to initial properties)

fromto()

ex- gsap.to("selector",{
properties.....
})

gsap.from("selector",{
properties.....
})

>>> gsap.to(),gsap.from().. here gsap is the object

**** DURATION : is the time taken by an element to reach its final state.
**** DELAY : is the time after which ANIMATION STARTS

> We can add CSS PROPERTIES in the methods but we have to use CAMELCASE for properties name and ("")commas for specifying the values.
```

### / Text animation

```
> x:200 = translate the element in x direction 200 , y:200 = translate the element in y direction 200.
> YOU CAN ADD CSS PROPERTIES IN TWEEN METHODS using CAMELCASE AND "".
> PROPERIES

. REPEAT: to repeat the animation,animation will run (n+1) times coz by default it runs 1 time and then n times which will be specified.
"-1": for INFINITE REPEAT

. STAGGER: The stagger property tells GSAP to animate multiple elements one after another — instead of all at once.(one by one or Sequentially)
"1": for sequential order
"-1": for reverse order

. YOYO: The yoyo property in GSAP makes an animation play forward, then backward
"true": comes back to initial
"false": don't come back

**** NOTE ***** : YOYO property doesn't work without repeat property.
```
