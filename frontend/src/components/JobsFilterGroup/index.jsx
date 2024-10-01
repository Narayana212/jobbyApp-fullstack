import ProfileDetails from '../ProfileDetails'
import './index.css'

/**
 * Renders a job filter group component with employment type and salary range filters
 * @param {Object} props - The component props
 * @param {Array} props.employmentTypesList - List of employment types
 * @param {Array} props.salaryRangesList - List of salary ranges
 * @param {Function} props.changeEmploymentType - Function to handle employment type change
 * @param {Function} props.changeSalaryRange - Function to handle salary range change
 * @returns {JSX.Element} A div containing profile details and filter options for employment type and salary range
 */
const JobsFilterGroup = props => {
  /**
   * Generates a list of employment types as checkbox items
   * @param {Object} props - Component props
   * @param {Array} props.employmentTypesList - List of employment types
   * @param {Function} props.changeEmploymentType - Function to handle employment type change
   * @returns {Array} Array of JSX elements representing employment type checkboxes
   */
  const getEmploymentTypeList = () => {
    const {employmentTypesList} = props

    /**
     * Maps over a list of employment types and renders checkbox items
     * @param {Array} employmentTypesList - List of employment type objects
     * @param {Object} props - Component props containing changeEmploymentType function
     * @returns {Array} Array of JSX elements representing checkbox list items
     */
    return employmentTypesList.map(employ => {
      const {changeEmploymentType} = props
      /**
       * Handles the change event for employment type selection
       * @param {Event} event - The change event object
       * @returns {void} This function doesn't return a value
       */
      const onChangeEmployType = event =>
        changeEmploymentType(event.target.value)

      return (
        <li
          className="checkbox-list-items"
          key={employ.employmentTypeId}
          onChange={onChangeEmployType}
        >
          <input
            type="checkbox"
            className="check-radio"
            id={employ.employmentTypeId}
            value={employ.employmentTypeId}
          />
          <label htmlFor={employ.employmentTypeId} className="check-label">
            {employ.label}
          </label>
        </li>
      )
    })
  }

  /**
   * Renders the employment type section of the UI
   /**
    * Generates a list of salary range options as radio buttons
    * @param {Object} props - The component props
    * @param {Array} props.salaryRangesList - List of salary range objects
    * @param {Function} props.changeSalaryRange - Function to handle salary range change
    * @returns {Array} An array of JSX elements representing salary range options
    */
   * @returns {JSX.Element} A div containing a heading and an unordered list of employment types
   */
  const renderEmploymentType = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Type of Employment</h1>
      <ul className="salary-range-container">{getEmploymentTypeList()}</ul>
    </div>
  )

  const getSalaryRangeList = () => {
    const {salaryRangesList} = props

    /**
     * Maps over a list of salary ranges and returns an array of JSX elements representing radio buttons
     * @param {Array} salaryRangesList - List of salary range objects
     * @param {Object} props - Component props containing changeSalaryRange function
     * @returns {Array} Array of JSX li elements, each containing a radio input for a salary range
     */
    return salaryRangesList.map(salary => {
      const {changeSalaryRange} = props
      ```
      /**
       * Handles the change event for salary selection.
       * @param {void} - This function doesn't take any parameters.
       * @returns {void} This function doesn't return a value.
       */
      ```
      const onChangeSalary = () => changeSalaryRange(salary.salaryRangeId)

      return (
        <li
          className="checkbox-list-items"
          key={salary.salaryRangeId}
          onChange={onChangeSalary}
        >
          <input
            type="radio"
            className="check-radio"
            id={salary.salaryRangeId}
            name="salary"
          />
          <label htmlFor={salary.salaryRangeId} className="check-label">
            {salary.label}
          </label>
        </li>
      )
    })
  }

  /**
   * Renders the salary range component
   * @returns {JSX.Element} A div containing a heading and an unordered list of salary ranges
   */
  const renderSalaryRange = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Salary Range</h1>
      <ul className="salary-range-container">{getSalaryRangeList()}</ul>
    </div>
  )

  return (
    <div className="job-filter-group">
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderEmploymentType()}
      <hr className="horizontal-line" />
      {renderSalaryRange()}
    </div>
  )
}

export default JobsFilterGroup
