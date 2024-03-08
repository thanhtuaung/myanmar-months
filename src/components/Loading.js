import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ styleName = "loading" }) => {
  return (
    <>
      <div className={styleName}>
        <div className="text-center">
          <ReactLoading type="bars" color="#9fcfff" width={40}></ReactLoading>
        </div>
      </div>
    </>
  );
};

export default Loading;
