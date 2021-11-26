import { Schema, model } from 'mongoose';

interface option {
  grade: string;
  fees?: number;
  seats: number;
}

interface Grade {
  category: string;
  options: Array<option>;
}
const optionSchema = new Schema<option>({
  grade: { type: String, required: true },
  fees: Number,
  seats: { type: Number, required: true },
});

const GradeSchema = new Schema<Grade>({
  category: { type: String, required: true },
  options: [optionSchema],
});

const AdmissionModel = model<Grade>('admission', GradeSchema);

// module.exports = AdmissionModel;
export default AdmissionModel;
