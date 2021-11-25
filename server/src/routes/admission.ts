import { Router, Request, Response } from 'express';
import AdmissionModel from '../model/admission';

const router = Router();
router.route('/').get(async (_, res: Response) => {
  try {
    const admissions = await AdmissionModel.find({}, { _id: 0 });
    res.status(200).json(admissions);
  } catch (err: any) {
    res.status(500).send('Unable to fetch admission data from server');
  }
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    // console.log(id);
    const admission = await AdmissionModel.findById(id);
    res.status(200).json(admission);
  } catch (err: any) {
    res.status(404).send('Unable to find this particular admission data ');
  }
});

module.exports = router;
