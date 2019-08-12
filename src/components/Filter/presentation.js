import React from 'react';
import { DropButton, CheckBox, Box, Form, FormField, Button } from 'grommet';
import { Filter as FilterIcon } from 'grommet-icons';
import PropTypes from 'prop-types';

export const Content = ({onFieldChange, onSubmit, settings}) => {
  return (
    <Box width="small" pad="10px 5px 0" background="light-1">
      <Form onSubmit={onSubmit}>
        {
          Object.keys(settings).map((name) => {
            const value = settings[name]
            return (
              <FormField
                key={name}
                name={name}
                component={CheckBox}
                pad
                label={name}
                checked={value}
                onChange={onFieldChange.bind(null, name )}
              />
            )
          })
        }
        <Button type="submit" primary label="Save" margin={{top: "xsmall"}} />
      </Form>
    </Box>
  )
}

Content.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
}

export const Label = () => {
  return (
    <Box align="center" direction="row">Filter
      <FilterIcon/>
    </Box>
  )
}

Label.propTypes = {

}

export const Filter = ({onFieldChange, onSubmit, onDropButtonClose, settings}) => {
  return (
    <DropButton
      onClose={onDropButtonClose}
      label={<Label />}
      margin={{right: "small"}}
      dropAlign={{"top": "bottom", "left": "left"}}
      dropContent={<Content onSubmit={onSubmit} onFieldChange={onFieldChange} settings={settings}/>}
      />
  )
}

Filter.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onDropButtonClose: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
}

export default Filter
