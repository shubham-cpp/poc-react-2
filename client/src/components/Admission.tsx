import {
  Box,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tabs,
} from "@mui/material";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setAdmissionGrades } from "../features/Admission/admissionSlice";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <TableContainer sx={{ p: 3, maxWidth: "20rem" }}>
          <Table>
            <TableBody>{children}</TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Admission = (): ReactElement => {
  const [value, setValue] = useState(0);
  const grades = useSelector((state: RootState) => state.admission.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://medale-poc-2-server.el.r.appspot.com/api/admissions")
      .then(({ data }) => dispatch(setAdmissionGrades(data)))
      // .catch((err) =>
      //   console.error("Error while fetching grades ", err.message)
      // );
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) =>
    setValue(newValue);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {grades &&
            grades.map((grade, idx) => (
              <Tab label={grade.category} key={idx} {...a11yProps(idx)} />
            ))}
        </Tabs>
      </Box>

      {grades &&
        grades.map((grade, idx) => (
          <TabPanel value={value} key={`${grade.category}-${idx}`} index={idx}>
            {grade.options.map((option, idx) => (
              <TableRow
                key={`${option.grade}-${idx}`}
                className={`${idx % 2 === 0 ? "tbl-odd" : "tbl-even"}`}
              >
                <TableCell>{option.grade}</TableCell>
                <TableCell>{option.fees}</TableCell>
                <TableCell>{option.seats}</TableCell>
              </TableRow>
            ))}
          </TabPanel>
        ))}
    </Box>
  );
};

export default Admission;
