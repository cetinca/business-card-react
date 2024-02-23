import Icon from './Icon'
import GitHub from '../assets/github.svg'
import GitLab from '../assets/gitlab.svg'
import Hyperskill from '../assets/hyperskill.svg'

function Icons() {
  return (
    <div className="icons">
      <Icon className="icons--item" href="https://www.github.com/cetinca/" src={GitHub} alt="GitHub-icon" />
      <Icon className="icons--item" href="https://www.gitlab.com/cetincakirtr/" src={GitLab} alt="GitLab-icon" />
      <Icon className="icons--item" href="https://hyperskill.org/profile/136654234" src={Hyperskill} alt="Hyperskill-icon" />
    </div>
  )
}

export default Icons