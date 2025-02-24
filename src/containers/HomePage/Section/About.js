import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'
import Slider from "react-slick";



class About extends Component {
  
    render() {
        return (
          <div className="section-share section-about">
            <div className="section-about-header">Nguyễn Văn Công</div>
            <div className="section-about-content">
              <div className="content-left">
                <iframe
                  width="100%"
                  height="400px"
                  src="https://www.youtube.com/embed/147SkAVXEqM"
                  title="#51 Kết Thúc Design Giao Diện Clone BookingCare.vn 4 | React.JS Cho Người Mới Bắt Đầu"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="content-right">
                <p>
                    ✔ Frontend: Reactjs + Redux. HTML/CSS-scss/Bootstrap4 (reactrap) <br/>
                    ✔ Backend: Node.js (Express) + MySql (Sequelize)
                </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
