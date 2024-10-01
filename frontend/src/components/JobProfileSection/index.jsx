import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { BsSearch } from 'react-icons/bs';
import Cookies from 'js-cookie';
import JobCard from '../JobCard';
import JobsFilterGroup from '../JobsFilterGroup';
import './index.css';

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
];

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
];

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
};

class JobProfileSection extends Component {
  state = {
    jobsList: [],
    searchInput: '',
    employmentType: [],
    salaryRange: 0,
    apiStatus: apiStatusConstants.initial,
  };

  componentDidMount() {
    this.getJobDetails();
  }

  /**
   * Asynchronously fetches job details from an API and updates the component state.
   * @param {void} - This method doesn't take any parameters.
   * @returns {Promise<void>} Doesn't return a value, but updates the component state with job details or error status.
   */
  getJobDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });

    const jwtToken = Cookies.get('jwt_token');
    const { salaryRange, employmentType, searchInput } = this.state;
    const url = 'http://localhost:5123/';
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    };
    const response = await fetch(url, options);
    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
      const updatedData = data;
      this.setState({
        jobsList: updatedData,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      });
    }
  };

  /**
   * Updates the search input state based on the user's input.
   * @param {Object} event - The event object from the input change.
   * @returns {void} This method doesn't return a value.
   /**
    * Handles the keydown event for the component.
    * @param {React.KeyboardEvent} event - The keyboard event object.
    * @returns {void} This method doesn't return anything.
    */
   */
  /**
   * Updates the salary range state and triggers a job details refresh.
   * @param {number|Array} salary - The new salary range value(s) to set.
   * @returns {void} This method doesn't return a value.
   */
  changeSearchInput = event => {
    this.setState({ searchInput: event.target.value });
  };

  onKeyDown = event => {
    if (event.key === 'Enter') {
      this.getJobDetails();
    }
  };

  changeSalaryRange = salary => {
    this.setState({ salaryRange: salary }, this.getJobDetails);
  };

  /**
   * Updates the employment type and triggers a job details update.
   * @param {string} type - The employment type to be added.
   * @returns {void} This method doesn't return a value, but updates the state and calls getJobDetails.
   */
  changeEmploymentType = type => {
    this.setState(
      /**
       * Updates the employment type state by adding a new type to the existing array
       * @param {function} prevState - A function that returns the previous state object
       * @param {string} type - The new employment type to be added
       * @returns {object} An object with the updated employmentType array
       */
      prevState => ({ employmentType: [...prevState.employmentType, type] }),
      this.getJobDetails
    );
  };

  /**
   * Renders the job details section of the application
   * @returns {JSX.Element} The rendered job details section, either displaying a list of jobs or a "No Jobs Found" message
   */
  renderJobDetails = () => {
    const { jobsList, searchInput } = this.state;
    const jobsDisplay = jobsList.length > 0;

    return jobsDisplay ? (
      <div className="details-container">
        <div className="search-input">
          <input
            type="search"
            className="search"
            placeholder="Search"
            value={searchInput}
            onChange={this.changeSearchInput}
            onKeyDown={this.onKeyDown}
          />
          <button
            type="button"
            testid="searchButton"
            className="search-button"
            onClick={this.getJobDetails}
          >
            <BsSearch className="search-icon" />
          </button>
        </div>
        <ul className="job-details-item-container">
          ```
          /**
           * Renders a list of job cards using the JobCard component
           * @param {Array} jobsList - An array of job objects to be rendered
           * @returns {Array} An array of JobCard components, each representing a job
           */
          ```
          {jobsList.map(eachData => (
            <JobCard key={eachData.id} jobDetails={eachData} />
          ))}
        </ul>
      </div>
    ) : (
      <div className="no-jobs-container">
        <div className="search-input-content">
          <input
            type="search"
            className="search"
            placeholder="Search"
            value={searchInput}
            onChange={this.changeSearchInput}
            onKeyDown={this.onKeyDown}
          />
          <button
            type="button"
            testid="searchButton"
            className="search-button"
            onClick={this.getJobDetails}
          >
            <BsSearch className="search-icon" />
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          alt="no jobs"
          className="no-jobs"
        />
        <h1 className="no-jobs-heading">No Jobs Found</h1>
        <p className="no-jobs-desc">
          We could not find any jobs. Try other filters.
        </p>
      </div>
    );
  };

  /**
   * Renders the failure view component for when something goes wrong
   * @returns {JSX.Element} A div containing an image, heading, description, and a retry button
   */
  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure-view"
      />
      <h1 className="failure-heading">Oops! Something Went Wrong</h1>
      <p className="failure-desc">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        type="button"
        testid="button"
        className="jobs-failure-button"
        onClick={this.getJobDetails}
      >
        Retry
      </button>
    </div>
  );

  /**
   * Renders a loading view with a three-dot animation
   /**
    * Renders the job profile details list based on the current API status
    * @returns {JSX.Element|null} The appropriate JSX element based on the API status, or null if status is unknown
    */
   * @returns {JSX.Element} A div containing a Loader component with ThreeDots animation
   */
  renderLoadingView = () => (
    <div className="profile-loader-container" testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={50} width={50} />
    </div>
  );

  renderJobProfileDetailsList = () => {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobDetails();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };

  render() {
    const { searchInput } = this.state;
    return (
      <div className="job-details-container">
        <div className="render-group-items">
          <JobsFilterGroup
            employmentTypesList={employmentTypesList}
            salaryRangesList={salaryRangesList}
            changeEmploymentType={this.changeEmploymentType}
            changeSalaryRange={this.changeSalaryRange}
            searchInput={searchInput}
            changeSearchInput={this.changeSearchInput}
            getJobDetails={this.getJobDetails}
          />
        </div>
        <div className="responsive-items">
          {this.renderJobProfileDetailsList()}
        </div>
      </div>
    );
  }
}

export default JobProfileSection;
