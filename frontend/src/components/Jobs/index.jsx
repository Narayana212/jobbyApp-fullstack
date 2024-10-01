import Header from '../Header'
import JobProfileSection from '../JobProfileSection'
import './index.css'

/**
 * Renders the Jobs component
 * @returns {JSX.Element} A React component that displays the job profile page
 */
const Jobs = () => (
  <>
    <Header />
    <div className="job-profile-container">
      <JobProfileSection />
    </div>
  </>
)

export default Jobs
