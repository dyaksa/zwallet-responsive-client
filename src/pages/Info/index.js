import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import Notification from "../../components/Notification";
import Back from "../../icons/arrow-left.svg";

const Info = (props) => {
  const { data } = useSelector((state) => state.user);

  const splitPhone = (phone) => {
    if (phone) {
      const newPhone = phone.split("").map((item, index) => {
        if (index === 2 || index === 6) {
          return item + "-";
        } else {
          return item;
        }
      });

      return newPhone;
    } else {
      return "";
    }
  };

  return (
    <Fragment>
      <Navbar />
      <Container className="d-flex mt-5">
        <Menu active={4} />
        <div className="content-main">
            <div className="d-flex align-self-start align-items-start d-sm-none mb-4">
                <Link to="/profile">
                <img className="mr-3" src={Back} alt="back" />
                </Link>
                <p className="text bold text-dark">Personal Information</p>
            </div>
            <p style={{ width: "343px" }} className="text-muted mb-5">
                We got your personal information from the sign up proccess. If you
                want to make changes on your information, contact our support.
            </p>
            <div style={{ padding: "15px" }} className="label d-flex flex-column justify-content-between">
                <p className="med text-muted mb-2">First Name</p>
                <p className="bold big mb-0">{data.firstName}</p>
            </div>
            <div style={{ padding: "15px" }} className="label d-flex flex-column justify-content-between">
                <p className="med text-muted mb-2">Last Name</p>
                <p className="bold big mb-0">{data.lastName}</p>
            </div>
            <div style={{ padding: "15px" }} className="label d-flex flex-column justify-content-between">
                <p className="med text-muted mb-2">Verified E-mail</p>
                <p className="bold big mb-0">{data.email}</p>
            </div>
            <div style={{ padding: "15px" }} className="label d-flex justify-content-between align-items-center">
                <div>
                    <p className="med text-muted mb-2">Phone Number</p>
                    <p className="bold big mb-0 d-none d-sm-inline">+62 {splitPhone(data.phone)}</p>
                    <p className="bold big mb-0 d-sm-none">
                        {data.phone ? (
                        <p>+62 {splitPhone(data.phone)}</p>
                        ) : (
                        <Link className="primary" to="/profile/info/phone">
                            Add phone number
                        </Link>
                        )}
                    </p>
                </div>
                <div className="d-sm-block d-none">
                    <Link to="/profile/info/phone" style={{ cursor: "pointer" }} className="med primary">
                        Manage
                    </Link>
                </div>
                <div className="d-sm-none">
                {data.phone ? (
                    <Link to="/profile/info/phone" style={{ cursor: "pointer" }} className="med primary">
                    Manage
                    </Link>
                ) : (
                    ""
                )}
                </div>
            </div>
            <Notification />
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Info;
