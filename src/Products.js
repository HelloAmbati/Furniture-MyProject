
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/actions/cartActions';
import './Products.css';

function Products() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:5050/products')
            .then(res => setProducts(res.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container my-4">
            {/* <h5 className="text-dark text-center mb-4">Sink Into Style — Discover Your Perfect Sofa Today!</h5> */}
          
            <h5
                className="text-dark text-center mb-4"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
                Sink Into Style — Discover Your Perfect Sofa Today!
            </h5>

            <div className="d-flex justify-content-center mb-4">
                <div className="input-group w-50">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search Products"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="row">
                {products
                    .filter(product =>
                        product.title &&
                        product.title.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map(product => (
                        <div key={product.id} className="col-md-4 mb-4">
                            <div className="card h-100 product-card">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="card-img-top p-3"
                                    style={{ objectFit: 'contain', height: '200px' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h6 className="card-title text-primary">{product.title}</h6>
                                    <p className="text-danger fw-bold">₹{product.price}</p>
                                </div>
                                <div className="card-footer mt-auto">
                                    <div className="d-flex justify-content-between">
                                        <button
                                            className="btn btn-outline-primary btn-sm"
                                            onClick={() => dispatch(addToCart(product))}
                                        >
                                            Add to Cart
                                        </button>
                                        <Link to={`/products/${product.id}`} className="btn btn-outline-secondary btn-sm">
                                            More Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Products;

