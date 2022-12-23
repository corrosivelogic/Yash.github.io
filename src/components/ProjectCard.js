import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description,GithubUrl,imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br>
          <span><a href={GithubUrl} target="_blank">View Project</a></span>
        </div>
      </div>
    </Col>
  )
}