import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {  Container} from "reactstrap";
import './Update.css';
function Update() {
    const { id } = useParams();
    const [values, setValues] = useState({
        id: id,
        title: '',
        price: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                setValues({ ...values, title: response.data.title, price: response.data.price });
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, [id]);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`https://dummyjson.com/products/${id}`, values);
            setValues({ ...values, title: response.data.title, price: response.data.price });
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (

        <Container className="shadow-lg">
            <div >
                <form onSubmit={handleSubmit} >
                    <div>
                        <div className="heading"> Update Data</div>
                        <label htmlFor="name">Title :</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            placeholder="Enter title"
                            value={values.title}
                            onChange={(e) => setValues({ ...values, title: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Price :</label>
                        <input
                            type="text"
                            name="price"
                            className="form-control"
                            placeholder="Enter price"
                            value={values.price}
                            onChange={(e) => setValues({ ...values, price: e.target.value })}
                        />
                    </div>

                    <button className=' btn btn-sm btn-primary'>Update</button>
                </form>
            </div>
            
        </Container>

    );
}


export default Update;