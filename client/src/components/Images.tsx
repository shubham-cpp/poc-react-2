import { Image, Col, Row } from "react-bootstrap";
import { ReactElement } from "react";
import LazyLoad from "react-lazyload";

interface LazyImgProps {
  src: string;
  altText: string;
}

const LazyImg = ({ src, altText }: LazyImgProps): ReactElement => {
  return (
    <Col xs={6} md={4}>
      <LazyLoad throttle={200}>
        <Image className="lazg-img" src={src} alt={altText} thumbnail />
      </LazyLoad>
    </Col>
  );
};

const ImagesData = [
  {
    src: "https://www.collinsdictionary.com/images/thumb/school_309241295_250.jpg?version=4.0.200",
    altText: "Class asking questions",
  },
  {
    src: "https://static.india.com/wp-content/uploads/2021/04/students-exams-schools-closed-PTI.jpg",
    altText: "Class with mask",
  },
  {
    src: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/02/26/960599-school-college-opening-news-unlock-4.0.jpg",
    altText: "Class exams under covid",
  },
  {
    src: "https://static.scientificamerican.com/sciam/cache/file/8D45FDBD-8058-4662-A266A2D78F34915B_source.jpg?w=590&h=800&37C97420-0824-4F3E-83C7FCE454AAFB29",
    altText: "Primary school",
  },
  {
    src: "https://ggsc.s3.amazonaws.com/images/made/images/uploads/How_to_Make_This_Hard_Transition_Back_to_School_With_Your_Students_600_400_int_c1-2x.jpg",
    altText: "Primary school asking questions",
  },
  {
    src: "https://images.livemint.com/img/2021/09/30/600x338/2a03e28e-1d47-11ec-ba83-70a33182afba_1632501796448_1632990335207.jpg",
    altText: "Primary school exams",
  },
  {
    src: "https://api.time.com/wp-content/uploads/2020/08/GettyImages-1228201428.jpg?w=800&quality=85",
    altText: "School welcoming students post covid",
  },
  {
    src: "https://i.guim.co.uk/img/media/a4614a7add9d855c0fcf9f0cb3b68599bd41865f/0_382_5760_3458/master/5760.jpg?width=620&quality=85&auto=format&fit=max&s=7648fc6993aa7293a58a4e7f7afbbb2b",
    altText: "Pre-primary class",
  },
];

const Images = (): ReactElement => {
  return (
    <div className="container">
      <Row>
        {ImageData &&
          ImagesData.map((img, idx) => (
            <LazyImg key={idx} src={img.src} altText={img.altText} />
          ))}
      </Row>
    </div>
  );
};

export default Images;
