import React from 'react';
import {useParams , NavLink} from "react-router-dom"
import {Button} from "react-bootstrap"

const PostDetails = () => {
  let params  = useParams();
  return (
    <div className={'text-center my-5'}>
      <h1>{params.name}</h1>
      <div className={'my-5'}>
        <NavLink to={'/blog'}>
          <Button variant={'outline-danger'}>Blogs List</Button>
        </NavLink>
      </div>

    </div>
  );
};

export default PostDetails;