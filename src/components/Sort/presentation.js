import React from 'react';
import { DropButton, RadioButtonGroup, Box, Button, Form } from 'grommet';
import PropTypes from 'prop-types';

// TODO: add an option to reverse the sort

export const Content = ({ onSave, onChange, value }) => {
  return (
    <Box width="small">
      <Form onSubmit={onSave}>
        <RadioButtonGroup
          name="sort"
          value={value}
          onChange={onChange}
          options={["rent", "name", "size"]} />
        <Button type="submit" primary label="Save" />
      </Form>
    </Box>
  )
}

Content.propTypes = {
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

const Sort = ({ onSave, onChange, onClose, value }) => {
  return (
    <DropButton
      dropContent={<Content onSave={onSave} onChange={onChange} value={value} />}
      label="Sort"
      onClose={onClose}
      dropAlign={{
        top: "bottom",
        right: "right"
      }} />
  )
}

Sort.propTypes = {
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default Sort;
