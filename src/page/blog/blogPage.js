import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import EachBlog from "../../components/eachBlog/eachBlog";
import postService from "../../API/modules/postService"

const Blog = () => {
  let [data , setData] = useState([])
  useEffect(() => {
    postService.getPostData().then(res => {
      console.log(res)
      setData(res.data)
    })
  } , [])

  return (
    <div>
      <h1 className={'text-center my-5'}>Blog Page</h1>
      <Container className={'my-5'}>
        <Row>
          {
            data.map((data , index) => {
              return(
                <Col key={index} lg={4} className={'mb-3'}>
                  <EachBlog title={data.title} img={data.img} paragraph={data.paragraph}/>
                </Col>)
            })
          }
        </Row>
      </Container>
    </div>
  );
};

export default Blog;