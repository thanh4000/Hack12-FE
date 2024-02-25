import React from "react";
// import { Container } from "reactstrap";


import { Container, Row, Col } from "reactstrap";

import img from "../../../../public/img-03.jpg"


import CardInfo from "../CardInfo/CardInfo"


import "./create.css";

type nftData = any[] | null
// const item = {
//     id: "01",
//     title: "Guard",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
//     currentBid: 7.89,
//     imgUrl: img,
//     // creator: "Trista Francis",
//     // creatorImg: avatar,
// };

// const ImgStyle = {
//     backgroundImage: `url(${item.imgUrl})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
// };

// console.log("item", item);
// console.log("itemUrl", ImgStyle);

const Create = ({ displayMode, data }: { displayMode: string, data?: nftData }) => {

    return (
        <div>
            <section className="create--section">
                <div className="common__section">
                    <h2>Create Proposal</h2>
                </div>
                <Container className="create--container">
                    <Row className="create--form">
                        <Col lg="12" md="6" sm="6">
                            <h5 className="mb-4 text-light">Preview Item</h5>

                            {/* <NftCard
                                id={item.id}
                                title={item.title}
                                desc={item.desc}
                                currentBid={item.currentBid}
                                imgUrl={item.imgUrl}
                                // creator={item.creator}
                                // creatorImg={item.creatorImg}
                            /> */}

                            {/* <Card
                                displayMode={displayMode}
                                key={obj.id}
                                title={obj.name}
                                image={obj.image}
                                floor_price={obj.floorPrice}
                            /> */}

                            {
                                data &&
                                <CardInfo
                                    displayMode={displayMode}
                                    key={data[0].id}
                                    title={data[0].name}
                                    image={data[0].image}
                                    floor_price={data[0].floorPrice}
                                />
                            }

                        </Col>

                        <Col lg="12" md="6" sm="6">
                            <div className="create__item">
                                <form>
                                    {/* <div className="form__input">
                                        <label htmlFor="">Upload File</label>
                                        <input type="file" className="upload__input" />
                                    </div> */}

                                    <div className="form__input">
                                        <label htmlFor="">Price </label>
                                        <input
                                            type="number"
                                            placeholder="Enter price for one item (SOL)"
                                        />
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="">Maximum Buyer</label>
                                        <input type="number" placeholder="Enter minimum bid" />
                                    </div>

                                    <div className=" d-flex align-items-center gap-4">
                                        <div className="form__input w-50">
                                            <label htmlFor="">Starting Date</label>
                                            <input type="date" />
                                        </div>

                                        <div className="form__input w-50">
                                            <label htmlFor="">Expiration Date</label>
                                            <input type="date" />
                                        </div>
                                    </div>

                                    <div className="form__input">
                                        <label htmlFor="">Title</label>
                                        <input type="text" placeholder="Enter title" />
                                    </div>

                                    {/* <div className="form__input">
                                        <label htmlFor="">Description</label>
                                        <textarea
                                            name=""
                                            id=""
                                            // rows="7"
                                            placeholder="Enter description"
                                            className="w-100"
                                        ></textarea>
                                    </div> */}

                                    <button className="create--btn" onClick={}>Create Proposal</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Create;
