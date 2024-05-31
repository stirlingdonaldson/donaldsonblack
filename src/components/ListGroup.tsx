function ListGroup() {


    let items = [
        'New York',
        'Auckland',
        'Tokyo',
        'Melbourne',
        'Sydney'
    ];
    items = [];

   
    return (
        <>
            <h1>List</h1>
            {items.length === 0 ? <p>No item found</p> : null} {/* if item is empty, return <p> else do nothing */}
        </>
    );
    
    return (
        <>  
    <h1>List</h1>
    
    <ul className="list-group">
        { items.map(item => <li key={item}> {item}</li>) 
        /* This will return an array of JSX elements, where item is being turned into li elements
        curly braces render code dynamically,
        key element should be used to elements can be added or removed dynamically */  }     
    </ul>
    </>
  );
}

export default ListGroup;
