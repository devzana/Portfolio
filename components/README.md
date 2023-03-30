# components dir Instruction

This folder is logically speaking on the same layer as lib.

Why not place them in the same folder, you say? To avoid excessive nesting, which can become nasty.

As you may have imagined, here we can place the components that make up our pages. Furthermore, these components are highly tied to the domain and are not supposed to be highly reusable across projects.

They're business-logic rich, and we can build them using the reusable UI components from core.

The business-logic side of things, such as queries, or functions that mutate data, are all imported from lib so that they can be reusable across components.

For example, the component CreateEventForm knows about the domain and uses a mutation to create an event.

This component is domain-dependent, and as such, we place it in the components folder rather than core.

Project Structure by: **Giancarlo Buomprisco**  
Read More: <https://giancarlobuomprisco.com/next/a-scalable-nextjs-project-structure>
