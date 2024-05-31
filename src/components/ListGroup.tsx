import { useState } from "react";

function ListGroup() {

    let items = ['New York','Auckland','Tokyo','Melbourne','Sydney'];
    
    
    // HOOK!
    const [selectedIndex, setSelectedIndex] = useState(-1);

   // const [name, setName] = useState('');

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}

            <ul className="list-group">
                { items.map((item, index) => 
                    <li 
                        className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'} // way to add class dynamically
                        key={item} 
                        onClick={() => setSelectedIndex(index)}> {/* note this isn't being called rather handled, just referenced ??? */} 
                        
                        {item}
                    </li>) 


                /* This will return an array of JSX elements, where item is being turned into li elements
                curly braces render code dynamically,
                key element should be used to elements can be added or removed dynamically */  }     
            </ul>
        </>
    );
    
    return (
    <>  
    <h1>List</h1>
    
    </>
  );
}

export default ListGroup;
