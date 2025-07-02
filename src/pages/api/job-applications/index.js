import dbConnect from '@/lib/mongodb';
import JobApplication from '@/models/JobApplication';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm({
      uploadDir: path.join(process.cwd(), 'public/uploads/resumes'),
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024, // 5MB
      filter: ({ mimetype }) => mimetype === 'application/pdf',
    });
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      const { name, email, phone, college, course, job } = fields;
      if (!files.resume) {
        return res.status(400).json({ message: 'Resume is required and must be a PDF.' });
      }
      const resumePath = files.resume[0]?.filepath || files.resume.filepath;
      const relativePath = path.relative(path.join(process.cwd(), 'public'), resumePath);
      try {
        const application = await JobApplication.create({
          name,
          email,
          phone,
          college,
          course,
          resume: relativePath.replace(/\\/g, '/'),
          job,
        });
        return res.status(201).json(application);
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    });
    return;
  }
  if (req.method === 'GET') {
    try {
      const applications = await JobApplication.find().populate('job');
      return res.json(applications);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
  return res.status(405).json({ message: 'Method not allowed' });
}
