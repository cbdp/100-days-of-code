// Don't Update props

/* You learned earlier that a component can change its state by calling 
this.setState(). But how does a component change its props?

The answer: It doesn’t -- A component should never update this.props!

This is potentially confusing. props and state store dynamic information. 
Dynamic information can change, by definition. If a component can’t change its props, 
then what are props for?

A React component should use props to store information that can be changed, 
but can only be changed by a different component.

A React component should use state to store information that the component itself 
can change. */