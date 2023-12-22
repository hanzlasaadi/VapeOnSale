import React from "react";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function SingleProductPage3() {
  return (
    <div className="pt-[5rem]">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 p-5 ">
            <img
              src="https://www.vapeshop.co.uk/cdn/shop/products/ske-crystal-bar-blueberry-sour-raspberry-disposable-vape.png?height=1000&v=1657811225&width=1000"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 mt-5">
            <div className>
              <p className="fs-4 fw-bold">Fresh Menthol Mojito Vape Bar</p>
              <p className="fs-3 mt-3 fw-bold" style={{ color: "#fe0101" }}>
                £4.49
              </p>
              <hr />
              <p>
                TRY THE BLUEBERRY SOUR RASPBERRY SKE CRYSTAL BAR 600 DISPOSABLE
                VAPE The Blueberry Sour Raspberry SKE Crystal Bar 600 combines
                sweet blueberries with a sour raspberry flavouring to create the
                ultimate sweet and sour vape. This disposable is well-balanced
                and provides a delightful fruity kick.
              </p>
              <div className="row border-bottom mb-3" style={{ marginLeft: 2 }}>
                <table id="dl" className="mb-2">
                  <tbody className="align-top">
                    <tr>
                      <th>Battery Capacity</th>
                      <td>1000mAh</td>
                    </tr>
                    <tr>
                      <th>Battery Type</th>
                      <td>Integrated</td>
                    </tr>
                    <tr>
                      <th>Tank Capacity</th>
                      <td>2ml</td>
                    </tr>
                    <tr>
                      <th>Height</th>
                      <td>9.6cm (3.8")</td>
                    </tr>
                    <tr>
                      <th>Width</th>
                      <td>2.7cm (1.1")</td>
                    </tr>
                    <tr>
                      <th>Depth</th>
                      <td>1.6cm (0.6")</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="d-flex">
                <div className="d-flex">
                  <button
                    id="decrement"
                    className="bg-light border-0 p-3 m-0 fw-bold"
                  >
                    -
                  </button>
                  <p id="count" className="bg-light p-3 m-0 fw-bold">
                    0
                  </p>
                  <button
                    id="increment"
                    className="bg-light border-0 p-3 m-0 fw-bold"
                  >
                    +
                  </button>
                </div>
                <div>
                  {/* Button trigger modal */}
                  <button
                    type="button"
                    className=" text-white bg-dark rounded-none mt-2 w-64 p-2"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    style={{ marginLeft: 30 }}
                  >
                    ADD TO CART
                  </button>
                  {/* Modal */}
                  <div
                    className="modal fade "
                    style={{ marginTop: 180 }}
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="staticBackdropLabel">
                            <b> Your Cart</b>
                          </h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        {/*-----add to cart modal body---*/}
                        <div className="modal-body d-flex">
                          <img
                            src="https://www.vapeshop.co.uk/cdn/shop/products/ske-crystal-bar-blueberry-sour-raspberry-disposable-vape.png?height=1000&v=1657811225&width=1000"
                            height="90px"
                            width="80px"
                          />
                          <p className="fs-6 fw-bold">
                            Fresh Menthol Mojito Vape Bar
                            <br />
                            £4.49
                            <br />
                            <span
                              className="fw-normal text-decoration-underline"
                              role="button"
                              style={{ fontSize: 14 }}
                            >
                              Remove
                            </span>
                          </p>
                        </div>
                        <div
                          className="modal-footer d-flex justify-content-center align-items-center"
                          
                        >
                          <Link to="/ProductPage2">
                            <button
                              type="button"
                              className=" text-black btn p-2 bg-warning rounded-none"
                              data-bs-dismiss="modal"
                            >
                              Keep Shopping
                            </button>
                            {/* <Button variant="warning" data-bs-dismiss="modal">Keep Shopping</Button> */}
                          </Link>
                          <a href="./checkout.html">
                            <button
                              type="button"
                              className="text-white btn p-2 bg-dark rounded-none"
                            >
                              Checkout
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*------- toggle bar (add to cart)-----*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 justify-align-center">
        <p className="fs-3">YOU MAY ALSO LIKE</p>
        <div className="row">
          <div className="col">
            <div className="card border-0" style={{ width: "16rem" }}>
              <img
                src="https://cdn.go-liquid.co.uk/media/catalog/product/cache/432bcb65bd207ae6026adf8852d8cc28/s/k/ske-crystal-bar-lemon-lime-disposable-vape.jpg"
                className="card-img-top card rounded-0"
              />
              <div className="card-body">
                <p className="card-title">Lemon and Lime Bar</p>
                <p className="card-text fw-bold" style={{ color: "#fe0101" }}>
                  £4.49
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0" style={{ width: "16rem" }}>
              <img
                src="https://ik.imagekit.io/p2slevyg1/c9.jpeg?updatedAt=1701355717652"
                className="card-img-top card rounded-0"
              />
              <div className="card-body">
                <p className="card-title">Sour Apple Blueberry Vape Bar</p>
                <p className="card-text fw-bold" style={{ color: "#fe0101" }}>
                  £4.49
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0" style={{ width: "16rem" }}>
              <img
                src="https://ik.imagekit.io/p2slevyg1/c2.jpeg?updatedAt=1701355717698"
                className="card-img-top card rounded-0"
              />
              <div className="card-body">
                <p className="card-title">Vimbull Ice Vape Bar</p>
                <p className="card-text fw-bold" style={{ color: "#fe0101" }}>
                  £4.49
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0" style={{ width: "16rem" }}>
              <img
                src="https://ik.imagekit.io/p2slevyg1/c9.jpeg?updatedAt=1701355717652"
                className="card-img-top card rounded-0"
              />
              <div className="card-body">
                <p className="card-title">Vimbull Ice Vape Bar</p>
                <p className="card-text fw-bold" style={{ color: "#fe0101" }}>
                  £4.49
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <div className="card border-0" style={{ width: "16rem" }}>
              <img
                src="https://www.eco-vape.co.uk/wp-content/uploads/2022/11/ske-crystal-skittles-800x.png"
                className="card-img-top card rounded-0"
              />
              <div className="card-body">
                <p className="card-title">SKE Crystal Vape Bar</p>
                <p className="card-text fw-bold" style={{ color: "#fe0101" }}>
                  £4.49
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0" style={{ width: "16rem" }}>
              <img
                src="https://ik.imagekit.io/p2slevyg1/c3.jpeg?updatedAt=1701355717647"
                className="card-img-top card rounded-0"
              />
              <div className="card-body">
                <p className="card-title">Sour Apple Blueberry Vape Bar</p>
                <p className="card-text fw-bold" style={{ color: "#fe0101" }}>
                  £4.49
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0" style={{ width: "16rem" }}>
              <img
                src="https://ik.imagekit.io/p2slevyg1/c2.jpeg?updatedAt=1701355717698"
                className="card-img-top card rounded-0"
              />
              <div className="card-body">
                <p className="card-title">Vimbull Ice Vape Bar</p>
                <p className="card-text fw-bold" style={{ color: "#fe0101" }}>
                  £4.49
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0" style={{ width: "16rem" }}>
              <img
                src="https://ik.imagekit.io/p2slevyg1/c3.jpeg?updatedAt=1701355717647"
                className="card-img-top card rounded-0"
              />
              <div className="card-body">
                <p className="card-title">Vimbull Ice Vape Bar</p>
                <p className="card-text fw-bold" style={{ color: "#fe0101" }}>
                  £4.49
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default SingleProductPage3;
