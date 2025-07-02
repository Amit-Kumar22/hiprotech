import dbConnect from '@/lib/mongodb';
import Job from '@/models/Job';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'GET') {
    const { department, type, location, search } = req.query;
    let query = { isActive: true };
    if (department) query.department = department;
    if (type) query.type = type;
    if (location) query.location = new RegExp(location, 'i');
    if (search) {
      query.$or = [
        { title: new RegExp(search, 'i') },
        { description: new RegExp(search, 'i') }
      ];
    }
    const jobs = await Job.find(query).sort('-postedAt');
    return res.json(jobs);
  }
  if (req.method === 'POST') {
    // TODO: Add admin authentication
    const { title, department, location, type, description, requirements } = req.body;
    const job = await Job.create({
      title,
      department,
      location,
      type,
      description,
      requirements: requirements || []
    });
    return res.status(201).json(job);
  }
  return res.status(405).json({ message: 'Method not allowed' });
}
