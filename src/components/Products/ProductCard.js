import React from 'react'
import { Col,Card,Link,ToastContainer } from 'react-bootstrap'
import rate from "../../images/rate.png";
import prod1 from "../../images/item.png"
import favImg from "../../images/fav-off.png"
const ProductCard = () => {
    return (
        <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "345px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
                }}>
                <Card.Img style={{ height: "228px", width: "100%" }} src={prod1} />
                <div className="d-flex justify-content-end mx-2">
                    <img
                        src={favImg}
                        alt=""
                        className="text- center"
                        style={{
                            height: "24px",
                            width: "26px",
                            cursor: 'pointer'
                        }}
                    />
                </div>
                <Card.Body>
                    <Card.Title>
                        <div className="card-title">
                            ساعة سيد كربون اسود رولكس ساعة 
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between ">
                            <div className="d-flex">
                                <img
                                    className=""
                                    src={rate}
                                    alt=""
                                    height="16px"
                                    width="16px"
                                />
                                <div className="card-rate mx-2">4.5</div>
                            </div>
                            <div className="d-flex">
                                <div className="card-price">900</div>
                                <div className="card-currency mx-1">جنيه</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <ToastContainer />
        </Col>
    )
}

export default ProductCard
