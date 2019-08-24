import React from 'react';
import { DropButton, CheckBox, Box, Form, FormField, Button, RadioButtonGroup } from 'grommet';
import { Filter as FilterIcon } from 'grommet-icons';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';

import { formatter } from '../../utils/format-price-range.js';
import GenderBothIcon from '../../../static/icons/gender-both.svg';
import GenderMaleIcon from '../../../static/icons/gender-male.svg';
import GenderFemaleIcon from '../../../static/icons/gender-female.svg';
import "react-input-range/lib/css/index.css"

export const Content = ({onFieldChange, onSave, settings}) => {
  return (
    <Box width="small" pad="10px 5px 0" background="light-1">
      <Form onSubmit={onSave}>
        {
          settings.map(({type, value, key, name}) => {
            switch (type) {
              case "bool":
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

              case "range":
                return (
                  <Box margin={{vertical: "medium"}}>
                    <InputRange
                      key={key[0] + "-" + key[1]}
                      maxValue={1700}
                      minValue={800}
                      value={{ min: value[0], max: value[1] }}
                      formatLabel={val => formatter.format(val)}
                      onChange={value => onFieldChange(key, value)} />
                  </Box>
                )

              case "gender":
                return (
                  <RadioButtonGroup
                    className="filter-gender-radio-button-group"
                    direction="row"
                    key={key}
                    name="gender filter"
                    options={[
                      {
                        value: "M",
                        label: <GenderMaleIcon className="custom-icon"/>
                      },
                      {
                        value: "F",
                        label: <GenderFemaleIcon className="custom-icon" />
                      },
                      {
                        value: "B",
                        label: <GenderBothIcon className="custom-icon" />
                      }
                    ]}
                    value={value}
                    onChange={onFieldChange.bind(null, key)}
                  />
                )

              case "int":
                return <div>int</div>

              default:
                throw new Error(`unkonwn type: ${type}`)

            }
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
    <Box align="center" direction="row">
      <FilterIcon/>
      Filter
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
