import React from 'react'

function Blogs() {
  return (
    <div>
       <div className="sec-box" style={{ marginTop: 100 }}>
          <h1 className="text-3xl font-bold text-center p-5">Our Blog</h1>
          <br />
          <div
            id="carouselExampleControls1"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card-wrapper container-sm d-flex justify-content-around">
                  <div className="card" style={{ width: "22rem" }}>
                    <img
                      src="https://www.vapeshop.co.uk/cdn/shop/files/ULTD_Raspberry_Twist_Nic_Salt_10ml.jpg?v=1701178868&width=800"
                      className="card-img-top"
                      alt="..."
                      height="400px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">HOT DISPOSABLES</h5>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. At suscipit sunt
                      </p>
                      <p className="float-end text-danger">
                        Read more
                        <span>
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-right" />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="card" style={{ width: "22rem" }}>
                    <img
                      src="https://www.vapeshop.co.uk/cdn/shop/files/Lemon_and_Lime_SKE_Crystal_Bar_600_Disposable_Vape.jpg?v=1701174622&width=800"
                      className="card-img-top"
                      alt="..."
                      height="400px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">TRENDING VAPE KITS</h5>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. At suscipit sunt
                      </p>
                      <p className="float-end text-danger">
                        Read more
                        <span>
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-right" />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="card" style={{ width: "22rem" }}>
                    <img
                      src="https://www.vapeshop.co.uk/cdn/shop/files/Heisenberg_by_Vampire_Vape_10ml_452d540e-d045-476a-a4a3-2f03f186667d.jpg?v=1701178420&width=800"
                      className="card-img-top"
                      height="400px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">REPLACEMENT PODS</h5>
                      <p className>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. At suscipit sunt
                      </p>
                      <p className="float-end text-danger">
                        Read more
                        <span>
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-right" />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card-wrapper container-sm d-flex justify-content-around">
                  <div className="card" style={{ width: "22rem" }}>
                    <img
                      src="https://diyeliquids.co.uk/wp-content/uploads/2022/01/Passionfruit.jpg"
                      className="card-img-top"
                      alt="..."
                      height="400px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        IVG Disposable Vape Bar E-Liquids
                      </h5>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. At suscipit sunt
                      </p>
                      <p className="float-end text-danger">
                        Read more
                        <span>
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-right" />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="card" style={{ width: "22rem" }}>
                    <img
                      src="https://res.cloudinary.com/paystack/image/upload/public/files/products/rc6x415jwm48fin6ev6n.jpg"
                      className="card-img-top"
                      alt="..."
                      height="400px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Vape Bar E-Liquids</h5>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. At suscipit sunt
                      </p>
                      <p className="float-end text-danger">
                        Read more
                        <span>
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-right" />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="card" style={{ width: "22rem" }}>
                    <img
                      src="https://denvervaper.com/cdn/shop/files/smok_-_nord_50w_-_pod_kit_-_all_colors-PhotoRoom_420x.png?v=1692368958"
                      className="card-img-top"
                      alt="..."
                      height="400px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        The Evolution of bottle size in uk
                      </h5>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. At suscipit sunt
                      </p>
                      <p className="float-end text-danger">
                        Read more
                        <span>
                          <i className="fa fa-angle-right" />
                          <i className="fa fa-angle-right" />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls1"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls1"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Blogs
