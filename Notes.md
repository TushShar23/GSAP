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

### / ScrollTrigger text animation

```
In this i used scrolltrigger for making text animations. 
```

### / Advance ScrollTrigger

```
Here we have two new scrollTrigger properties which are very very important for making eye catchy animations.

> scrub : scrub property is used for controlling the animation by scrolling.The scrolling of user tells how much animation should be perform.(sync animation with scroll ).We can give scrub in numbers from 1 to 5, and we can also use (true/false) but recommended use numbers.

> pin : As the name suggests it pins the element.It fix the element on the page.Keep it fixed while scrolling.

```

### / Animation assignment

```
Here i have made a very cool text animation using scrollTrigger and its properties.

Few points to remember:
> We use pin property when we need to trigger the parent element.It fix the parent element on the screen till the animation ends.
> Start "top 0%" is nothing but saying that when page 2 reaches 0% from top then start the animation and ends the animation when page2 is -180 from the top.Why page2 coz it is the parent where we have applied the animation.

ex - gsap.to("#page2 h1",{
    transform:"translateX(-170%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 0%",
        end:"top -180%",
        scrub:2,
        pin:true // pin will stop/pin the parent where we have applied animation.
    }
})
```

### / Lec-3(SVG animation using GSAP)

```
# Search path curve on google and then go to mdn docs.

> SVG stands for scalable vector graphics.Scalable Vector Graphics (SVG) is an XML-based markup language for describing two-dimensional based vector graphics.

# You have to learn about its path properties and type of curves.

> path :The <path> element is the most powerful element in the SVG library of basic shapes. It can be used to create lines, curves, arcs, and more.Paths create complex shapes by combining multiple straight lines or curved lines.
> There are an infinite number of Bézier curves, but only two are available in <path> elements: a cubic one, called with C, and a quadratic one, called with Q.
> We mostly use quadratic curve.

<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent" />
</svg>

> <svg></svg> is just a container which holds the main thing i.e. path which defines the main curve/line or any figure.

Here , M = moving to (x,y), Q = quadratic curve -> (x,y) = controlling points/coordinates (x,y), then (x,y) = end coordinates

> The shape of a <path> element is defined by one parameter: d.The d attribute contains a series of commands and parameters used by those commands.

For instance, let's move to the x and y coordinates (10, 10). The "Move to" command is called with the letter M. When the parser runs into this letter, it knows it needs to move to a point. So, to move to (10, 10) the command to use would be M 10 10. After that, the parser begins reading for the next command.

*** Coordinates in the d parameter are always unitless and hence in the user coordinate system ***

 gsap.to("svg path",{
        attr: { d: finalPath },
        duration: 1.5,
        ease:"elastic.out(1.8,0.2)"
    })

> we have applied gsap animation to the svg path element 

NEW PROPERTY
> attr : stands for attribute.This is used to change/modify the attribute of the element using gsap.

-------------------------------------------------------------------------------------------------------
We have made a stringy animation which is controlled by our mousemove event.
> There we have used this "attr" property for the movement of the string along with the mousecursor.

```
