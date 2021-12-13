import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface option {
  grade: string;
  fees?: number;
  seats: number;
}

interface Grade {
  category: string;
  options: Array<option>;
}
interface AdmissionState {
  value: Grade[];
}
const initialState: AdmissionState = {
  value: [],
};
export const admissionSlice = createSlice({
  name: "admission",
  initialState,
  reducers: {
    setAdmissionGrades: (state, action: PayloadAction<Grade[]>) => {
      state.value = action.payload;
    },
    // addAdmissionGrade: (state, action: PayloadAction<Grade>) => {
    //   state.value.push(action.payload);
    // },
  },
});

export const { setAdmissionGrades } = admissionSlice.actions;
export default admissionSlice.reducer;
