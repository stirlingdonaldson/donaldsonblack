function ListGroup() {


    let items = [
        'New York',
        'Auckland',
        'Tokyo',
        'Melbourne',
        'Sydney'
    ];

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}

            <ul className="list-group">
                { items.map(item => <li className="list-group-item" key={item}> {item}</li>) 


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
