


import Carousel from 'react-bootstrap/Carousel';
import pic from "../../assets/hooks/cosplay2.jpg"
import pic2 from "../../assets/hooks/summer.jpg"

import pic3 from "../../assets/hooks/job.jpg"

const Header = () => {
  return (
    <header>
      <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={pic} alt=""/>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={pic2} alt=""/>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={pic3} alt=""/>
      </Carousel.Item>
    </Carousel>

    </header>
  )
}

export default Header