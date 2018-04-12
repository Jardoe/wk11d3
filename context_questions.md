# Intro to Context

## Brief

Read the information in intro_to_context.md and answer the following questions:

1. Can an arrow function expression's context change?
    No, the context in arrow functions cannot change. This is known as having definition context.

2. How do we know what object `this` refers to in an arrow function expression body?
    It refers to the object in which the function was originally defined.

3. Can a `function` expression's context change?
    Yes, by assigning the function to a property on the object, the context then changes.
    This is known as having execution context.

4. How do we know what object `this` refers to in a `function` expression body?
    It refers to what ever is execution the function.
