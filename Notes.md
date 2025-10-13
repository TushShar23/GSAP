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

### / Timeline and animations

```
> A TIMELINE in GSAP is like a container that holds multiple tweens (animations) and lets you control them together (In simple words it is just a controller which controls multiple tweens)
> When you define TIMELINE it is synchronous in nature.
> But the execution executes asynchronously
> GSAP AUTOMATICALLY runs the animation by default no need to call play() explicitly.
> GSAP calculates start and end times for each tween and manages them automatically.

const tl = gsap.timeline()
// timeline() is a function in GSAP and returns an instance of timeline and that instance has its own set of functions like play(),pause(),add(),reverse(),to(),from().....

**** NOTE **** - TIMELINE and TWEEN are the core concepts of GSAP.

```

## Lec-2

### / Basic Box animation

```
What is plugin ?
A plugin is an extension that adds extra features on top of an existing framework or library

> ScrollTrigger is an extension of GSAP which is used for SCROLL-BASED ANIMATIONS.
> For using ScrollTrigger in your code you need to first include its cdn:
https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js" integrity="sha512-P2IDYZfqSwjcSjX0BKeNhwRUH8zRPGlgcWl5n6gBLzdi4Y5/0O4zaXrtO4K9TZK6Hn1BenYpKowuCavNandERg==" crossorigin="anonymous" referrerpolicy="no-referrer

*NOTE - Order of scripts should be first is GSAP cdn -> ScrollTrigger cdn -> your local script.js

> You can define or use scrollTrigger like this :
i) gsap.to/from("selector",{
   scrollTrigger:"selector > child > child..."
})
	OR 
ii) gsap.to/from("selector",{
   duration:1,
   scrollTrigger:{
	trigger:"",
	scroller:"",
	start:"",
	end:"",
}
})

> trigger : defines which element will trigger the scrollTrigger.
> scroller : defines which element is actually being scrolled.
By default,ScrollTrigger listens to the window for scroll events.
But sometimes, your page (or a section of it) scrolls inside a container (like a div) — not the whole window.Thats where scroller comes in.
> start : defines when(at what scroll position) animation should start.
> end : defines when(at what scroll position) animation should end.
> markers : (true/false) - shows visual markers(start and end markers for the animation) for help.

** Its a CSS property-(whitespace-nowrap):This will put your text into one line.(specifies how whitespace is handled in an element)


```
