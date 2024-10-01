import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {HiLocationMarker, HiMail} from 'react-icons/hi'
import './index.css'

/**
 * Renders a job card component with details of a job posting.
 * @param {Object} props - The props object containing job details.
 * @param {Object} props.jobDetails - An object containing specific job information.
 * @param {string} props.jobDetails.title - The job title.
 * @param {string} props.jobDetails.companyLogoUrl - URL of the company logo.
 * @param {number} props.jobDetails.rating - The job or company rating.
 * @param {string} props.jobDetails.employmentType - The type of employment (e.g., full-time, part-time).
 * @param {string} props.jobDetails.location - The job location.
 * @param {string} props.jobDetails.id - Unique identifier for the job.
 * @param {string} props.jobDetails.packagePerAnnum - The annual package or salary information.
 * @param {string} props.jobDetails.jobDescription - Detailed description of the job.
 * @returns {JSX.Element} A Link component containing the job card information.
 */
const JobCard = props => {
  const {jobDetails} = props
  const {
    title,
    companyLogoUrl,
    rating,
    employmentType,
    location,
    id,
    packagePerAnnum,
    jobDescription,
  } = jobDetails

  return (
    <Link to={`/jobs/${id}`} className="link-item">
      <li className="job-list-items">
        <div className="company-container">
          <div>
            <img src={companyLogoUrl} alt="company logo" className="logo-url" />
          </div>
          <div>
            <h1 className="company-title">{title}</h1>
            <div className="star-icon-container">
              <AiFillStar className="star-icon" />
              <p className="rating-count">{rating}</p>
            </div>
          </div>
        </div>
        <div className="location-container-flex-content">
          <div className="location-desc">
            <div className="star-icon-container">
              <HiLocationMarker className="location-icon" />
              <p className="location-desc description">{location}</p>
            </div>
            <div className="star-icon-container">
              <HiMail className="location-icon left-icon" />
              <p className="emp-type description">{employmentType}</p>
            </div>
          </div>
          <div className="star-icon-container">
            <p className="package-desc description">{packagePerAnnum}</p>
          </div>
        </div>
        <hr className="line" />
        <h1 className="desc-heading">Description</h1>
        <p className="job-description">{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobCard
