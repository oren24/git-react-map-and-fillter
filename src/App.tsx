import React, { useState } from 'react';
import './App.css';
import IProduct from "./models/IProducs";

function App() {
    let [productsModel, setProductsModel] = useState<IProduct[]>([
        { id: 0, name: 'Computer Screen', description: '26" 4K LED display', company: 'LG', price: 1200, amount: 7},
        { id: 1, name: 'Whiskey', description: 'Blended scotch whiskey', company: 'Jack Daniels', price: 100, amount: 50},
        { id: 2, name: 'The third product', description: 'Some random thing. I could not think of anything original', company: 'The one and only', price: 200, amount: 13}, { id: 3, name: 'The fourth product', description: 'Some random thing. I could not think of anything original', company: 'The one and only', price: 200, amount: 13}]);

  return (
    <div className="App">

    </div>
  );
}

export default App;
