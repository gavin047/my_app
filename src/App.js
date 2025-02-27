import React, { useState } from 'react';
import './App.css';
import SearchBar from './searchBar';

// App Component
function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const products = [
        { id: 1, name: "Phone A", price: "$499" },
        { id: 2, name: "Phone B", price: "$699" },
        { id: 3, name: "Phone C", price: "$899" },
    ];

    // Handle search input
    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    // Handle "Buy Now" button click
    const handleBuyNowClick = (productName, productPrice) => {
        alert(`You are purchasing: ${productName}\nPrice: ${productPrice}`);

        // Simulate loading
        setTimeout(() => {
            alert("Purchase complete! Thank you for shopping with us.");
        }, 2000);
    };

    return (
        <div className="App">
            <h1>Welcome to Our Store</h1>

            {/* Search Bar */}
            <SearchBar value={searchTerm} onChange={handleSearchInput} />

            {/* Product List */}
            <div className="slider">
                {products
                    .filter(product => product.name.toLowerCase().includes(searchTerm))
                    .map(product => (
                        <div key={product.id} className="sliderItem">
                            <h2 className="sliderTitle">{product.name}</h2>
                            <p className="sliderPrice">{product.price}</p>
                            <button className="buyButton" onClick={() => handleBuyNowClick(product.name, product.price)}>
                                Buy Now!
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default App;
