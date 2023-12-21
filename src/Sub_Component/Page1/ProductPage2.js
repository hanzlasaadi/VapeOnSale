import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function ProductPage2() {
  return (
    <div>

  <div className="container-fluid p-5">
    <div className="row">
      <div className="col-lg-3 bg-light">
        <div className="p-4">
          <p className="fs-5 fw-bold">
            <span><img width="20px" style={{marginRight: 9}} src="https://ik.imagekit.io/p2slevyg1/filter.png?updatedAt=1699433217621" /></span>
            Filter
            <span className="float-end" style={{fontSize: 10}}><button className="border-bottom border-dark border-end-0 bg-light border-top-0 border-start-0 rounded-0 p-1 m-0" style={{width: 55, fontSize: 12}}>
                Clear All
              </button></span>
          </p>
          <p className="fs-6 fw-bold mt-5">
            Types<span className="float-end" style={{fontSize: 10}}><button className="border-bottom border-dark border-end-0 bg-light border-top-0 border-start-0 rounded-0 p-1 m-0" style={{fontSize: 12}}>
                Clear
              </button></span>
          </p>
          <div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Disposables Vape Kits
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Eliquids
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Vape Kits
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Coils
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Prefilled Pods
              </label>
            </div>
          </div>
          <br />
          {/* ---price--- */}
          <p className="fs-6 fw-bold">
            Price Range<span className="float-end" style={{fontSize: 10}}><button className="border-bottom border-dark border-end-0 bg-light border-top-0 border-start-0 rounded-0 p-1 m-0" style={{fontSize: 12}}>
                Clear
              </button></span>
          </p>
          <div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                £0-£10
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                £10-£25
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                £25-£50
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                £50-£75
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                £150-£200
              </label>
            </div>
          </div>
          <br />
          {/* ---brands---  */}
          <p className="fs-6 fw-bold">
            Brands
            <span className="float-end" style={{fontSize: 10}}><button className="border-bottom border-dark border-end-0 bg-light border-top-0 border-start-0 rounded-0 p-1 m-0" style={{fontSize: 12}}>
                Clear
              </button></span>
          </p>
          <div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Lost Marry
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Elf-Bar
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Hayati Pro
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Aspire
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                ETO
              </label>
            </div>
          </div>
          <br />
          {/* ---flavour----  */}
          <p className="fs-6 fw-bold">
            Flavour<span className="float-end" style={{fontSize: 10}}><button className="border-bottom border-dark border-end-0 bg-light border-top-0 border-start-0 rounded-0 p-1 m-0" style={{fontSize: 12}}>
                Clear
              </button></span>
          </p>
          <div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Desserts
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Drink
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Sweets
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Fruits
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Menthol
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Tobacoo
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="d-flex justify-content-center mt-5">
          <input type="text" placeholder="   Search" className="w-50" />
          <span className="dropdown">
            <button className="btn rounded-0 btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Disposable
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#">Eliquids</a></li>
              <li><a className="dropdown-item" href="#">Kits</a></li>
              <li><a className="dropdown-item" href="#">Tanks</a></li>
              <li><a className="dropdown-item" href="#">Coils</a></li>
              <li><a className="dropdown-item" href="#">Pods</a></li>
            </ul>
          </span>
        </div>
        <div className="container mt-5 justify-align-center">
          <div className="row">
            <div className="col">
              {/* <a href="./SingleProduct.html" className="text-decoration-none"> */}
              <Link to="/singleProduct">
                <div className="card border-0" style={{width: '16rem'}}>
                  <img src="https://ik.imagekit.io/p2slevyg1/c2.jpeg?updatedAt=1701355717698" className="card-img-top card rounded-0" />
                  <div className="card-body">
                    <p className="card-title">Fresh Menthol Mojito Vape Bar</p>
                    <p className="card-text fw-bold" style={{color: '#fe0101'}}>
                      £4.49
                    </p>
                  </div>
                </div>
                </Link>
              {/* </a> */}
            </div>
            <div className="col">
              <div className="card border-0" style={{width: '16rem'}}>
                <img src="https://ik.imagekit.io/p2slevyg1/c9.jpeg?updatedAt=1701355717652" className="card-img-top card rounded-0" />
                <div className="card-body">
                  <p className="card-title">Sour Apple Blueberry Vape Bar</p>
                  <p className="card-text fw-bold" style={{color: '#fe0101'}}>
                    £4.49
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0" style={{width: '16rem'}}>
                <img src="https://ik.imagekit.io/p2slevyg1/c3.jpeg?updatedAt=1701355717647" className="card-img-top card rounded-0" />
                <div className="card-body">
                  <p className="card-title">Vimbull Ice Vape Bar</p>
                  <p className="card-text fw-bold" style={{color: '#fe0101'}}>
                    £4.49
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="card border-0" style={{width: '16rem'}}>
                <img src="https://ik.imagekit.io/p2slevyg1/c3.jpeg?updatedAt=1701355717647" className="card-img-top card rounded-0" />
                <div className="card-body">
                  <p className="card-title">Pink Lemonable Vape Bar</p>
                  <p className="card-text fw-bold" style={{color: '#fe0101'}}>
                    £4.49
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0" style={{width: '16rem'}}>
                <img src="https://ik.imagekit.io/p2slevyg1/c9.jpeg?updatedAt=1701355717652" className="card-img-top card rounded-0" />
                <div className="card-body">
                  <p className="card-title">Blueberry Raspberry Vape Bar</p>
                  <p className="card-text fw-bold" style={{color: '#fe0101'}}>
                    £4.49
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0" style={{width: '16rem'}}>
                <img src="https://ik.imagekit.io/p2slevyg1/c3.jpeg?updatedAt=1701355717647" className="card-img-top card rounded-0" />
                <div className="card-body">
                  <p className="card-title">Strawberry Kiwi Vape Bar</p>
                  <p className="card-text fw-bold" style={{color: '#fe0101'}}>
                    £4.49
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="card border-0" style={{width: '16rem'}}>
                <img src="https://ik.imagekit.io/p2slevyg1/c2.jpeg?updatedAt=1701355717698" className="card-img-top card rounded-0" />
                <div className="card-body">
                  <p className="card-title">Cherry Ice SKE Bar</p>
                  <p className="card-text fw-bold" style={{color: '#fe0101'}}>
                    £4.49
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0" style={{width: '16rem'}}>
                <img src="https://ik.imagekit.io/p2slevyg1/c2.jpeg?updatedAt=1701355717698" className="card-img-top card rounded-0" />
                <div className="card-body">
                  <p className="card-title">Berry Ice Vape Bar</p>
                  <p className="card-text fw-bold" style={{color: '#fe0101'}}>
                    £4.49
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0" style={{width: '16rem'}}>
                <img src="https://ik.imagekit.io/p2slevyg1/c9.jpeg?updatedAt=1701355717652" className="card-img-top card rounded-0" />
                <div className="card-body">
                  <p className="card-title">Green Grape Vape Bar</p>
                  <p className="card-text fw-bold" style={{color: '#fe0101'}}>
                    £4.49
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<Outlet /> 

    </div>
  )
}

export default ProductPage2
