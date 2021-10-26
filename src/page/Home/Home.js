import {Col, Container, Row} from "react-bootstrap"
import EachBlog from "../../components/eachBlog/eachBlog"
import axios from "axios"
import {useEffect, useState} from "react";


const Home = () => {
  let [data , setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/recentBlog').then(res =>{
      console.log(res)
      setData(res.data)
    }).catch(err => {
      console.log(err)
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