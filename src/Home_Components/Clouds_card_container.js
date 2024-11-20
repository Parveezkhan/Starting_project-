import React from 'react'


//import css
import "../styles/Clouds_card_container.css"

//import logos
import aws_logo from '../images/aws-logo.jpg'
import azure_logo from '../images/azure-logo.jpg'
import gcp_logo from '../images/gcp-logo.jpg'
import ibm_logo from '../images/ibm-logo.jpg'
import alibaba_logo from '../images/alibaba-logo.jpg'
import { Link } from 'react-router-dom'

const Clouds_card_container = () => {
  return (
      <div className='container mx-auto'>
        <div className='title text-center h4 fw-bolder text-infra'><span>Services</span><hr className='w-25 border-4 mx-auto border-primary'></hr></div>
          <div className='card-contanier d-flex justify-content-space flex-wrap px-4  align-items-center '>
            <div class="card m-4" style={{width:"18rem"}}>
              <img class="card-img-top" src={aws_logo} alt="Card image cap" />
              <div class="card-body">
                  <h5 class="card-title h3 fw-bolder">Aws Services</h5>
                  <p class="card-text">Explore the trending aws services.</p>
                  <Link to="/services/aws" class="btn btn-primary">Explore Services</Link>
              </div>
          </div>
          <div class="card m-4" style={{width:"18rem"}}>
              <img class="card-img-top w-100" src={azure_logo} alt="Card image cap" />
              <div class="card-body">
                  <h5 class="card-title h3 fw-bolder">Azure Services</h5>
                  <p class="card-text">Explore the trending azure services.</p>
                  <Link to="/services/azure" class="btn btn-primary">Explore Services</Link>
              </div>
          </div>
          <div class="card m-4" style={{width:"18rem"}}>
              <img class="card-img-top" src={gcp_logo} alt="Card image cap" />
              <div class="card-body">
                  <h5 class="card-title h3 fw-bolder">Google Cloud Services</h5>
                  <p class="card-text">Explore the trending gcp services.</p>
                  <Link to="/services/gcp" class="btn btn-primary">Explore Services</Link>
              </div>
          </div>
          <div class="card m-4" style={{width:"18rem"}}>
              <img class="card-img-top" src={ibm_logo} alt="Card image cap" />
              <div class="card-body">
                  <h5 class="card-title h3 fw-bolder">IBM Cloud Services</h5>
                  <p class="card-text">Explore the trending ibm services.</p>
                  <Link to="/services/ibm" class="btn btn-primary">Explore Services</Link>
              </div>
          </div>
          <div class="card m-4" style={{width:"18rem"}}>
              <img class="card-img-top" src={alibaba_logo} alt="Card image cap" />
              <div class="card-body">
                  <h5 class="card-title h3 fw-bolder">Alibaba Cloud Services</h5>
                  <p class="card-text">Explore the trending alibaba services.</p>
                  <Link to="/services/alibaba" class="btn btn-primary ">Explore Services</Link>
              </div>
          </div>
          
          </div>

      </div>
  )
}

export default Clouds_card_container