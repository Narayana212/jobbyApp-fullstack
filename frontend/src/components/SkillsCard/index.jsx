import './index.css'

/**
 * Renders a skill card component displaying an image and name of a skill.
 * @param {Object} props - The component props.
 * @param {Object} props.skillDetails - An object containing details of the skill.
 * @param {string} props.skillDetails.name - The name of the skill.
 * @param {string} props.skillDetails.imageUrl - The URL of the skill's image.
 * @returns {JSX.Element} A list item containing the skill card.
 */
const SkillsCard = props => {
  const {skillDetails} = props
  const {name, imageUrl} = skillDetails

  return (
    <li className="skill-list-items">
      <div className="skill-container">
        <img src={imageUrl} alt={name} className="skill-image" />
        <p className="image-name">{name}</p>
      </div>
    </li>
  )
}

export default SkillsCard
