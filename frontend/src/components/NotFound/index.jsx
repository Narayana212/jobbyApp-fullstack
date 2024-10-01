import './index.css'

/**
 * Renders a Not Found page component
 * @returns {JSX.Element} A div containing an image, heading, and description for a 404 page
 */
const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      alt="not found"
      className="not-found-image"
    />
    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="not-desc">
      we’re sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
