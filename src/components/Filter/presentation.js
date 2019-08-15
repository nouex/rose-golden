import React from 'react';
import { DropButton, CheckBox, Box, Form, FormField, Button } from 'grommet';
import { Filter as FilterIcon } from 'grommet-icons';
import PropTypes from 'prop-types';

export const Content = ({onFieldChange, onSave, settings}) => {
  return (
    <Box width="small" pad="10px 5px 0" background="light-1">
      <Form onSubmit={onSave}>
        {
          settings.map(({type, value, key, name}) => {
            return (
              <FormField
                key={key}
                name={key}
                component={CheckBox}
                pad
                label={name}
                checked={value}
                onChange={onFieldChange.bind(null, key )}
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
  onSave: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  settings: PropTypes.array.isRequired
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

export const Filter = ({onFieldChange, onSave, onDropButtonClose, settings}) => {
  return (
    <DropButton
      onClose={onDropButtonClose}
      label={<Label />}
      margin={{right: "small"}}
      dropAlign={{"top": "bottom", "left": "left"}}
      dropContent={<Content onSave={onSave} onFieldChange={onFieldChange} settings={settings}/>}
      />
  )
}

Filter.propTypes = {
  onSave: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onDropButtonClose: PropTypes.func.isRequired,
  settings: PropTypes.array.isRequired
}

export default Filter
