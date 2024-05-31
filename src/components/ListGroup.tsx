function ListGroup() {
    const items = [
        'New York',
        'Auckland',
        'Tokyo',
        'Melbourne',
        'Sydney'
    ];

    
    
    return (
        <>  
    <h1>List</h1>
    
    <ul className="list-group">
        { items.map(item => <li>{item}</li>) /* This will return an array of JSX elements, where item is being turned into li elements, curly braces render code dynamically */  }     
    </ul>
    </>
  );
}

export default ListGroup;
