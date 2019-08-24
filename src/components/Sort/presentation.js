import React from 'react';
import { DropButton, RadioButtonGroup, Box, Button, Form, CheckBox } from 'grommet';
import { Sort as SortIcon, Ascend as AscendIcon } from 'grommet-icons';
import PropTypes from 'prop-types';

// TODO: add an option to reverse the sort

export const Content = ({ onSave, onChange, value, onOrderChange, isAscending }) => {
  return (
    <Box width="small" pad="10px 5px 0" background="light-1">
      <Box align="end" title="Order by Ascending?">
        <CheckBox
          toggle
          checked={isAscending}
          label={<AscendIcon/>}
          onChange={onOrderChange}
          />
      </Box>
      <Form onSubmit={onSave}>
        <RadioButtonGroup
          name="sort"
          value={value}
          onChange={onChange}
          options={[
            {
              value: "rent",
              label: "Price"
            },
            {
              value: "name",
              label: "Name"
            },
            {
              value: "size",
              label: "Student Capacity"
            }
          ]} />
        <Button type="submit" primary label="Save" margin={{top: "xsmall"}}/>
      </Form>
    </Box>
  )
}

Content.propTypes = {
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onOrderChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

const Sort = ({ onSave, onChange, onClose, onOrderChange, value, isAscending }) => {
  return (
    <DropButton
      dropContent={<Content onSave={onSave} onChange={onChange} onOrderChange={onOrderChange} value={value} isAscending={isAscending} />}
      dropAlign={{"top": "top", "left": "left"}}
      label={<Box direction="row" align="center"><SortIcon />Sort</Box>}
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
  onOrderChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isAscending: PropTypes.bool.isRequired,
}

export default Sort;
