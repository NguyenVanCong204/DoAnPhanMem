import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeBusiness.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import bullet from "../../../assets/images/bullet01.gif";
import { push } from "connected-react-router";

class HomeBusiness extends Component {
  handleClickCompany = () => {
    this.props.navigate("/company");
  };
  render() {
    return (
      <div className="section-homebusiness">
        <div className="section-container">
          <h3 className="header">Thông Tin Cơ Sở Sản Xuất</h3>
          <div className="line"></div>
          <div className="line1"></div>
          <table>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <img src={bullet} height={5} width={9}></img>
                  <b onClick={() => this.handleClickCompany()}>
                    CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN
                  </b>
                  <br />
                  <a>
                    Lô a2 cn1 cụm công nghiệp từ liêm, Phường Thanh Bình, Quận
                    Hải Châu, Thành phố Đà Nẵng
                  </a>
                  <br />
                  <a>Ngày công bố 29-04-2025</a>
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
          <div className="line1"></div>
          <table>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <img src={bullet} height={5} width={9}></img>
                  <b>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</b>
                  <br />
                  <a>
                    Lô a2 cn1 cụm công nghiệp từ liêm, Phường Thanh Bình, Quận
                    Hải Châu, Thành phố Đà Nẵng
                  </a>
                  <br />
                  <a>Ngày công bố 29-04-2025</a>
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
          <div className="line1"></div>
          <table>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <img src={bullet} height={5} width={9}></img>
                  <b>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</b>
                  <br />
                  <a>
                    Lô a2 cn1 cụm công nghiệp từ liêm, Phường Thanh Bình, Quận
                    Hải Châu, Thành phố Đà Nẵng
                  </a>
                  <br />
                  <a>Ngày công bố 29-04-2025</a>
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
          <div className="line1"></div>
          <table>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <img src={bullet} height={5} width={9}></img>
                  <b>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</b>
                  <br />
                  <a>
                    Lô a2 cn1 cụm công nghiệp từ liêm, Phường Thanh Bình, Quận
                    Hải Châu, Thành phố Đà Nẵng
                  </a>
                  <br />
                  <a>Ngày công bố 29-04-2025</a>
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
          <div className="line1"></div>
          <table>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <img src={bullet} height={5} width={9}></img>
                  <b>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</b>
                  <br />
                  <a>
                    Lô a2 cn1 cụm công nghiệp từ liêm, Phường Thanh Bình, Quận
                    Hải Châu, Thành phố Đà Nẵng
                  </a>
                  <br />
                  <a>Ngày công bố 29-04-2025</a>
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
          <div className="line1"></div>
          <table>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <img src={bullet} height={5} width={9}></img>
                  <b>CÔNG TY CỔ PHẦN DƯỢC PHẨM THIÊN NGUYÊN</b>
                  <br />
                  <a>
                    Lô a2 cn1 cụm công nghiệp từ liêm, Phường Thanh Bình, Quận
                    Hải Châu, Thành phố Đà Nẵng
                  </a>
                  <br />
                  <a>Ngày công bố 29-04-2025</a>
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
          <div className="line1"></div>
          <div className="nextpage">
            <nav>
              <ul className="pagination">
                <li>
                  <span>-</span>
                </li>
                <li className="li1">
                  <span>1</span>
                </li>
                <li>
                  <span>2</span>
                </li>
                <li>
                  <span>3</span>
                </li>
                <li>
                  <span>...</span>
                </li>
                <li>
                  <span>4</span>
                </li>
                <li>
                  <span>+</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { navigate: (path) => dispatch(push(path)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeBusiness);
