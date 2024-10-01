import {AiFillStar} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import './index.css'

/**
 * Renders a similar job item component
 * @param {Object} props - The component props
 * @param {Object} props.jobDetails - The details of the similar job
 * @param {string} props.jobDetails.companyLogoUrl - URL of the company logo
 * @param {string} props.jobDetails.employmentType - Type of employment
 * @param {string} props.jobDetails.jobDescription - Description of the job
 * @param {string} props.jobDetails.location - Location of the job
 * @param {string} props.jobDetails.title - Title of the job
 * @param {number} props.jobDetails.rating - Rating of the job
 * @returns {JSX.Element} A list item containing details of a similar job
 */
const SimilarJobItem = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    title,
    rating,
  } = jobDetails

  return (
    <li className="similar-list-docs">
      <div className="logo-container">
        <img
          src={companyLogoUrl}
          alt="similar job company logo"
          className="company-logo-url"
        />
        <div>
          <h1 className="company-logo-title">{title}</h1>
          <div className="rating-container">
            <AiFillStar className="star-icon" />
            <p className="count-rating">{rating}</p>
          </div>
        </div>
      </div>
      <h1 className="similar-desc-heading">Description</h1>
      <p className="similar-desc">{jobDescription}</p>
      <div className="location-container-flex-justify">
        <div className="responsive">
          <GoLocation className="location-logo" />
          <p className="location-desc">{location}</p>
        </div>
        <div className="responsive">
          <BsBriefcaseFill className="location-logo-brief" />
          <p className="location-desc">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobItem
