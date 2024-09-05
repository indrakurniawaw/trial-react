import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table, Row, Card, Col, Container, Button } from "reactstrap";

export const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [Delete, setDelete] = useState([]);
// const postsList document = document.querySelector(' .post-list'); 

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [])



  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      fetch(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(console.log);
    }
  }
  return (

    <div>
      {console.log(data)}
      <Container fluid="md">
      <h1>Home</h1>
        <Row >
          <Col >
          <Card className="shadow-lg"> 
            
<Table striped>
              <thead>
                <tr >

                  <th>Thubnail</th>
                  <th>ID</th>
                  <th>TITLE</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.products &&
                  data.products.map((data) => (
                    <tr>
                      <td>
                      <img
                        className=""
                        style={{
                          width: "100px",
                          height: "100px",
                        }}
                        src={data.thumbnail}
                        alt="Card image cap"
                      ></img>
                    </td>
                      <td>{data.id}</td>
                      <td>{data.title}</td>
                      <td>
                        {new Intl.NumberFormat("en-IN", {
                          maximumSignificantDigits: 3,
                          style: "currency",
                          currency: "USD",
                        }).format(data.price)}
                      </td>

                      <td>

                        <Link className='text-decoration-none btn btn-sm btn-success'
                          to={`/Update/${data.id}`}>
                          Update
                        </Link>
                        {' '}
                        {/* <a href="#" className="btn btn-primary" id="delete-data">Delete</a> */}
                        <Button className='text-decoration-none btn btn-sm btn-danger'
                          onClick={id => handleDelete(data.id)}
                        >
                          Delete
                        </Button>

                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};