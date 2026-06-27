# Namaste React 🚀

# parcel
-Dev Build  

-Local Server

-HMR = Hot Module Replacement

-File Watching Algorithm - written in C++

-Caching -faster Builds

-Image Optimization 

-Minification 

-Bundling 

-Compress

-Consistent Hashing

-Code splitting

-Differential Bundling - support older browsers

-Diagnostic

-Error handling

-HTTPs

-tree shaking -remove unused code

-Different dev and prod bundles


# Namaste Food



/**
 * header
 * -logo
 * -nav items
 * 
 * body
 * -search
 * -restruantContainer
 * -restruantCard
 * 
 * 
 * footer
 * -copyright
 * -links
 * address
 * contact
 * 
 */



 # Types of export/import 


 there are 2 types of export/import
   
   
-Default export/import

export default components;

import Component from "path";

-Named export/import

export const component;

import {Component} from "path";



# React Hooks

(Normal JS utility functions)--this was written by facebook developers

there are 2 types of hooks

1> useState() -- superpowerful State variables in react(80% we use)

2> useEffect()



# Actual DOM VS Virtual DOM :-

- 🐢 Actual DOM

The real HTML page in your browser.
When something changes,
the browser repaints the entire page — very slow!

- ⚡ Virtual DOM

A lightweight copy of the real DOM stored in memory by React. 
React updates only the changed parts — very fast!

# The 3 key steps React does internally:

1. State changes → setCount(5)
        ↓
2. Diffing → Old VDOM vs New VDOM
   (finds: only <h1> changed)
        ↓
3. Updates ONLY <h1> in real DOM
   (not the entire page!)
