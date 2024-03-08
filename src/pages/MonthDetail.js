import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { API_URL } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../components/Loading";

const MonthDetail = () => {
  const { id } = useParams();
  const { data: month, error, isPending } = useFetch(API_URL + id);

  return (
    <div className="container py-2">
      {error && <div>{error}</div>}
      {isPending && <Loading styleName="detail-loading" />}
      {month && (
        <div className="month-detail">
          <div className="row">
            <div className="col-lg-6 pt-5 text-center">
              <img
                src={require(`../img/festival/${month.ImagePath}`)}
                alt=""
                width={"80%"}
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
            </div>
            <div className="col-lg-6 pt-5">
              <h3 className="mb-5">
                <FontAwesomeIcon
                  icon={["fas", "fa-moon"]}
                  color="#bfb8b8"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                />
                <span data-aos="zoom-in" data-aos-duration="1200">
                  {" "}
                  {month.MonthMm}လ
                </span>
              </h3>
              <h5 className="mb-3" data-aos="zoom-in" data-aos-duration="1400">
                English month - {month.MonthEn}
              </h5>
              <h5 className="mb-4" data-aos="zoom-in" data-aos-duration="1600">
                Festival - {month.FestivalMm}({month.FestivalEn})
              </h5>
              <p className="desc" data-aos="zoom-in" data-aos-duration="1300">
                {month.Description}
              </p>
            </div>
          </div>
          <div
            className="p-4 my-4 border border-2 rounded-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p>{month.Detail}</p>
          </div>
          <div className="d-flex">
            {/* <Link
              to=""
              className="btn btn-danger"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Delete
            </Link> */}
            <Link
              to="/"
              className="btn btn-dark ms-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Back
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthDetail;
