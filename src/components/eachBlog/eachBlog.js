import './eachBlog.css'
import {Button, Card} from "react-bootstrap"
import {NavLink} from "react-router-dom"

const EachBlog = ({img, title, paragraph}) => {
  return (
    <div>
      <Card>
        <Card.Img height={250} variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph.substring(0, 150)}...</Card.Text>
            <NavLink to={`/blog/${title}`}>
              <Button variant="outline-danger">GO</Button>
            </NavLink>
        </Card.Body>
      </Card>

    </div>
  );
};

export default EachBlog;