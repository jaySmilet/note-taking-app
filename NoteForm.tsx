import * as React from 'react';
import { Col, Form, Row, Stack } from 'react-bootstrap';

const NoteForm = () => {
  return (
    <div className="mb-4">
      <Form>
        <Stack gap={1}>
          <Row>
            <Col>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="tags">
                <Form.Label>Tags</Form.Label>
                <Form.Select required />
              </Form.Group>
            </Col>
          </Row>
        </Stack>
      </Form>
    </div>
  );
};

export default NoteForm;
