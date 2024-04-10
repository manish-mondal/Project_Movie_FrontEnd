import { useEffect,useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container,Row,Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/reviewForm";

import React from 'react'

const Reviews = ({getMovieData,movie,reviews,setReviews}) => {
    const revText = useRef();
    let param = useParams();
    const movieID = param.movieID;
    useEffect(()=>{
        getMovieData(movieID);
    },[])
    console.log("review")

    const addReview =async(e)=>{
        e.preventDefault();
        const rev = revText.current;

        try {
          const response = await api.post("/api/v1/reviews",{reviewBody:rev.value,imdbId:movieID});

            const updateReviews=[...reviews,{body:rev.value}];
            rev.value = "";
           // console.log("from review");
            setReviews(updateReviews);
        } catch (error) {
            console.log(error)
        }
     
    }

  return (
    

   <Container>
    <Row>
        <Col>
            <h3>Reviews</h3>
        </Col>
    </Row>
    <Row>
        <Col>
            <img src ={movie?.poster} alt ="" />
        </Col>
        <Col>
            {
                <>
                    <Row>
                        <Col>
                         
                            <ReviewForm handleSubmit = {addReview} revText = {revText} lebelText = "Please Write A Review"></ReviewForm>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr/>
                        </Col>
                    </Row>
                </>
            }
            {
                reviews?.map((r)=>{
                    return(
                        <>
                            <Row>
                                <Col>
                                   {r.body}
                                </Col>
                            </Row>
                        </>
                    )

                })
            }
        </Col>
    </Row>
   </Container>
  )
}

export default Reviews

