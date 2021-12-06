import { ReactElement } from "react";

const Contact = (): ReactElement => {
  return (
    <div className="container-lg mt-5">
      <div className="row justify-content-between">
        <div className="col-sm-12 col-md-4 ">
          <h1 className="fs-1 fw-bold text-warning">Phone</h1>
          <p className="fs-5" role="para">Pre-Primary School</p>
          <p className="fs-5" role="para">+91 95031 41559</p>
          <p className="fs-5" role="para">Primary & Secondary School</p>
          <p className="fs-5" role="para">+91 95031 41560</p>
        </div>
        <div className="col-sm-12 col-md-4 ">
          <h1 className="fs-1 fw-bold text-warning">Email</h1>
          <p className="fs-5" role="para">Pre-Primary School</p>
          <p className="fs-5" role="para"> kps.preprimary@learningcurve.com </p>
          <p className="fs-5" role="para">Primary & Secondary School</p>
          <p className="fs-5" role="para"> kps.primarysec@learningcurve.com </p>
        </div>
        <div className="col-sm-12 col-md-4 ">
          <h1 className="fs-1 fw-bold text-warning">Location</h1>
          <p className="fs-5" >Near Hotel Lemon Tree, Pune</p>
          <p className="fs-5" role="para">Maharashtra</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
