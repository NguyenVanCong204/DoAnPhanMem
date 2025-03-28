

import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty'
import MedicalFacility from './Section/MedicalFacility'
import "./HomePage.scss"
import OutStandingDoctor from'./Section/OutStandingDoctor'
import HandBook from './Section/HandBook'
import About from './Section/About'
import HomeFooter from './Section/HomeFooter'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,  //Hiển thị 4 cái trên 1 dòng,
            slidesToScroll: 1, //Sẽ cuộn thêm 1 khi click
          };
        return (
            <div>
                <HomeHeader isShowBanner={true}/>
                <Specialty settings={settings}/>
                <MedicalFacility settings={settings}/>
                <OutStandingDoctor settings={settings}/>
                <HandBook settings={settings}/> 
                <About/>
                <HomeFooter/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
