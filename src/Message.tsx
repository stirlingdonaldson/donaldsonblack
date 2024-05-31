
// PascalCasing- always use PascalCasing for React components and props
function Message() {

    // JSX: JavaScript XML
    // go to babeljs.io/repl to see how JSX is converted to JavaScript
    // an expression is any code that produces a value. Any expression can be added in the curly braces

    const name = 'harrison';
    return <h1>donaldsonblack {name}</h1>;

    // if statements can be used (code is unreachable becase something is already being returned)
    if (name)
        return <h1>donaldsonblack {name}</h1>;
    else
        return <h1>donaldsonblacker</h1>;

}


// to use component, export it as a default object from this module
export default Message;



