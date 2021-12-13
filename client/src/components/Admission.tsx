import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Tabs as BTabs, Tab as BTab, Table as BTable } from "react-bootstrap";
import { setAdmissionGrades } from "../features/Admission/admissionSlice";

const Admission = (): ReactElement => {
  const [errors, setErrors] = useState<string[]>([]);
  const [key, setKey] = useState("Primary");
  const grades = useSelector((state: RootState) => state.admission.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://api-dot-medale-poc-2.el.r.appspot.com/api/admissions")
      .then(({ data }) => dispatch(setAdmissionGrades(data)))
      .catch((err) =>
        setErrors([
          "Unable to fetch data from server",
          "Please refresh the page to maybe fix this issue",
          err.message,
        ])
      );
  }, []);

  if (errors.length)
    return (
      <div className="container-md justify-content-center">
        <h1 className="fs-3 fw-bolder text-warning">{errors[0]}</h1>
        <p>{errors[1]}</p>
        <p>{errors[2]}</p>
      </div>
    );

  return (
    <>
      <style type="text/css">
        {`
      .nav-tabs,.nav-pills{
        background-color:#323539;
      }
      `}
      </style>
      <BTabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k ?? grades[0].category ?? "Primary")}
        className="mb-3 p-2"
        variant="pills"
      >
        {grades &&
          grades.map((grade, idx) => (
            <BTab
              eventKey={grade.category}
              key={`${grade.category}-${idx}`}
              title={grade.category}
            >
              <BTable striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Grade</th>
                    <th>Fees</th>
                    <th>Seats</th>
                  </tr>
                </thead>
                <tbody>
                  {grade.options.map((option, idx) => (
                    <tr key={`${option.grade}-${option.seats}-${idx}`}>
                      <td>{idx + 1}</td>
                      <td>{option.grade}</td>
                      <td>{option.fees}</td>
                      <td>{option.seats}</td>
                    </tr>
                  ))}
                </tbody>
              </BTable>
            </BTab>
          ))}
      </BTabs>
    </>
  );
};

export default Admission;
