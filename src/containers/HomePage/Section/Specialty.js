import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss'
import { FormattedMessage } from 'react-intl'
import './Specialty.scss';

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import speciltyimg from '../../../assets/images/specialty/image.png'


class Specialty extends Component {
  
    render() {
        let settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,  //Hiển thị 4 cái trên 1 dòng,
          slidesToScroll: 1, //Sẽ cuộn thêm 1 khi click
        };
        return (
          <div className="section-specialty">
            <div className="specialty-container">
              <div className="specialty-header">
                <span className='title-section'>Chuyên Khoa Phổ Biến</span>
                <button className='btn-section'>Xem thêm</button>
              </div>
              <div className="specialty-body">
                <Slider {...settings}>
                  <div className="specialty-customize">
                    <div className="bg-image" />
                    <div className='specialty-text'>Cơ Xương Khớp 1</div>
                  </div>
                  <div className="specialty-customize">
                    <div className="bg-image" />
                    <div className='specialty-text'>Cơ Xương Khớp 2</div>
                  </div>
                  <div className="specialty-customize">
                    <div className="bg-image" />
                    <div className='specialty-text'>Cơ Xương Khớp 3</div>
                  </div>
                  <div className="specialty-customize">
                    <div className="bg-image" />
                    <div className='specialty-text'>Cơ Xương Khớp 4</div>
                  </div>
                  <div className="specialty-customize">
                    <div className="bg-image" />
                    <div className='specialty-text'>Cơ Xương Khớp 5</div>
                  </div>
                  <div className="specialty-customize">
                    <div className="bg-image" />
                    <div className='specialty-text'>Cơ Xương Khớp 6</div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
