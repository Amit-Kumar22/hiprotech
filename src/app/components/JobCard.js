export default function JobCard({ job, onApply }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
              {job.department}
            </span>
            <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">
              {job.location}
            </span>
            <span className="text-sm px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
              {job.type}
            </span>
          </div>
        </div>
        <button
          onClick={onApply}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Apply Now
        </button>
      </div>
      <div className="mt-4">
        <h4 className="font-medium text-gray-900 mb-2">Job Description</h4>
        <p className="text-gray-600 line-clamp-3">{job.description}</p>
      </div>
    </div>
  );
}