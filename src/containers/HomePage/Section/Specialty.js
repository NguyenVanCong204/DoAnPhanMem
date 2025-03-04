import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss'
import { FormattedMessage } from 'react-intl' 
import Slider from "react-slick";



class Specialty extends Component {
  
    render() {
        
        return (
          <div className="section-share section-specialty">
            <div className="section-container">
              <div className="section-header">
                <span className='title-section'><FormattedMessage id="hopage.popular-specialties" /></span>
                <button className='btn-section'><FormattedMessage id="hopage.more-infor" /></button>
              </div>
              <div className="section-body">
                <Slider {...this.props.settings}>
                  <div className="section-customize">
                    <div className="bg-image section-specialty" />
                    <div className='specialty-text'>Cơ Xương Khớp 1</div>
                  </div>
                  <div className="section-customize">
                    <div className="bg-image section-specialty" />
                    <div className='specialty-text'>Cơ Xương Khớp 2</div>
                  </div>
                  <div className="section-customize">
                    <div className="bg-image section-specialty" />
                    <div className='specialty-text'>Cơ Xương Khớp 3</div>
                  </div>
                  <div className="section-customize">
                    <div className="bg-image section-specialty" />
                    <div className='specialty-text'>Cơ Xương Khớp 4</div>
                  </div>
                  <div className="section-customize">
                    <div className="bg-image section-specialty" />
                    <div className='specialty-text'>Cơ Xương Khớp 5</div>
                  </div>
                  <div className="section-customize">
                    <div className="bg-image section-specialty" />
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
