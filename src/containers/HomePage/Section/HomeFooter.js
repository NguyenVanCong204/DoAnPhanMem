import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'
import Slider from "react-slick";



class HomeFooter extends Component {
  
    render() {
        return (
          <div className="home-footer">
            <p>&copy;2024 Nguyễn Văn Công . More Information . please visit my youtube channel . <a target='_blank' href='https://www.facebook.com/profile.php?id=100037461664398'> &#8594; Click here &#8592; </a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
