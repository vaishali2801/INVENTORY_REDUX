import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { add, handleEdit, handleDelete, setEditValue } from '../feature/inventorySlice'

const Add = () => {
    const product = useSelector((state) => state.inventory.product)
    const editValue = useSelector((state) => state.inventory.editValue)

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: "",
        price: 0,
        qty: 0,
        category: ""
    });

    const [searchQuery, setSearchQuery] = useState({
        sort: "asc",
        name: ""
    })


    useEffect(() => {
        editValue ? setInput(editValue) : null
    }, [editValue])

    const handleChange = (field, e) => {
        setInput((prev) => {
            return {
                ...prev,
                [field]: e.target.value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editValue) {
            dispatch(handleEdit(input));
        } else {
            dispatch(add(input))
        }
        setInput({ name: "", price: 0, qty: 0, category: "" })
    }

    const filterList = product.filter((p) => {
        return p.name.toLowerCase().includes(searchQuery.name.toLowerCase())
    })

    const sortedList = [...filterList].sort((a, b) => {
        switch (searchQuery.sort) {
            case "asc":
                return a.name.localeCompare(b.name);
            case "desc":
                return b.name.localeCompare(a.name);
            case "priceAsc":
                return Number(a.price) - Number(b.price);
            case "priceDes":
                return Number(b.price) - Number(a.price);
            case "QtyAsc":
                return Number(a.qty) - Number(b.qty);
            case "QtyDes":
                return Number(b.qty) - Number(a.qty);
            default:
                return 0;
        }
    })


    return (
        <div className='bg-dark' style={{ height: "100vh" }}>
            <Container className='d-flex justify-content-center align-items-center align-content-center'>
                <Row className=''>
                    <Col>
                        <Form className='bg-light p-4 rounded-3 mt-3 align-items-center'
                            style={{ width: "400px" }}
                            onSubmit={handleSubmit}>
                            <h2>Add Inventory</h2>
                            <Form.Group md="4">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter product name"
                                    value={input.name}
                                    onChange={(e) => handleChange("name", e)}
                                />
                            </Form.Group>
                            <Form.Group md="4">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Enter price"
                                    value={input.price}
                                    onChange={(e) => handleChange("price", e)}
                                />
                            </Form.Group>
                            <Form.Group md="4">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Enter quantity"
                                    value={input.qty}
                                    onChange={(e) => handleChange("qty", e)}
                                />
                            </Form.Group>
                            <Form.Group md="4">
                                <Form.Label>Category</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter category"
                                    value={input.category}
                                    onChange={(e) => handleChange("category", e)}
                                />
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="mt-3"
                                    style={{ width: "100%" }}
                                >
                                    {editValue ? "Update" : "Add"}
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <br /><br />
            <div>
                <Container>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group >
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="search title..."
                                        value={searchQuery.name}
                                        onChange={(e) => setSearchQuery((prev) => ({
                                            ...prev,
                                            name: e.target.value
                                        }))}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <select name="sort" value={searchQuery.sort} onChange={(e) =>
                                    setSearchQuery((prev) => ({
                                        ...prev,
                                        sort: e.target.value
                                    }))
                                } style={{ width: "100%", padding: "8px" }}>
                                    <option value="all">All</option>
                                    <option value="asc">Name ascending</option>
                                    <option value="desc">Name descending</option>
                                    <option value="priceAsc">Price ascending</option>
                                    <option value="priceDes">Price descending</option>
                                    <option value="QtyAsc">Quantity ascending</option>
                                    <option value="QtyDes">Quantity descending</option>
                                </select>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
            <br />
            {
                sortedList.length > 0 ? (
                    <Table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Category</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sortedList.map((p, index) => {
                                    return (
                                        <tr key={p.id}>
                                            <td>{index + 1}</td>
                                            <td>{p.name}</td>
                                            <td>{p.price}</td>
                                            <td>{p.qty}</td>
                                            <td>{p.category}</td>
                                            <td><Button variant='warning' onClick={() => dispatch(setEditValue(p.id))}>Edit</Button></td>
                                            <td><Button variant='danger' onClick={() => dispatch(handleDelete(p.id))}>Delete</Button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                )
                    : (<h1 style={{ textAlign: "center", color: "white" }}>No Data Found</h1>)
            }
        </div>
    )
}

export default Add
