import {Col, Container, Row} from "react-bootstrap"
import EachBlog from "../../components/eachBlog/eachBlog"
import {useEffect, useState} from "react"
import postService from "../../API/modules/postService"


const Home = () => {
  let [data , setData] = useState([])
  useEffect(() => {
   postService.getRecentPostData().then(res => {
     setData(res.data)
   })
  } , [])
  return (
    <div>
      <h1 className={'text-center my-5'}>Recent Blog Post</h1>
      <Container className={'my-5'}>
        <Row>
          {
            data.map((data , index) => {
              return(
                <Col key={index}>
                <EachBlog title={data.title} img={data.img} paragraph={data.paragraph}/>
              </Col>)
            })
          }
        </Row>
      </Container>
    </div>
  );
};

export default Home;