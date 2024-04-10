import { Form,Button, FormLabel, FormControl } from "react-bootstrap";

import React from 'react'

const ReviewForm = ({handleSubmit,revText,lebelText,defaultValue}) => {
  return (
    <Form> 
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <FormLabel>
                {lebelText}
            </FormLabel>
            <FormControl ref={revText} as={"textarea"} rows={3} defaultValue={defaultValue}>

            </FormControl>
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default ReviewForm
