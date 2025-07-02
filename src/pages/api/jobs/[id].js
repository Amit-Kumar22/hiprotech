import dbConnect from '@/lib/mongodb';
import Job from '@/models/Job';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  if (req.method === 'GET') {
    const job = await Job.findById(id);
    if (!job || !job.isActive) {
      return res.status(404).json({ message: 'Job not found' });
    }
    return res.json(job);
  }
  if (req.method === 'PUT') {
    // TODO: Add admin authentication
    const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }
    return res.json(updatedJob);
  }
  if (req.method === 'DELETE') {
    // TODO: Add admin authentication
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    job.isActive = false;
    await job.save();
    return res.json({ message: 'Job removed' });
  }
  return res.status(405).json({ message: 'Method not allowed' });
}
