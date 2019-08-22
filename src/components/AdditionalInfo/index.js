import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

import StudentCapacityIcon from '../../../static/icons/students.svg';
import ParkingSpacesIcon from '../../../static/icons/parking-lot.svg';
import ProcessingFeeIcon from '../../../static/icons/fees.svg';
import SecurityDepositIcon from '../../../static/icons/deposit.svg';
import { formatter as priceFormatter } from '../../utils/format-price-range';

// TODO: instead of using separate arrays for each fiel property, use a single array of objects that
//       contain properties for that field

const fields = [
  "studentCapacity",
  "parkingSpaces",
  "processingFee",
  "securityDeposit"
]

const fieldNames = [
  "Student Capacity",
  "Parking Spaces",
  "ProcessingFee",
  "Security Deposit"
]

const icons = [
  <StudentCapacityIcon className="custom-icon" />,
  <ParkingSpacesIcon className="custom-icon" />,
  <ProcessingFeeIcon className="custom-icon" />,
  <SecurityDepositIcon className="custom-icon" />
]

const formatters = [
  v => v,
  v => v,
  priceFormatter.format.bind(priceFormatter),
  priceFormatter.format.bind(priceFormatter)
]

const AdditionalInfo = ({ complex }) => {
  const names = fieldNames.map((name, index) => (
    <Box direction="row">
      { icons[index] }
      <Box margin={{ bottom: "small", left: "small" }}>{name}</Box>
    </Box>
  ))

  const values = fields.map((field, index) => <Box margin={{bottom: "xsmall"}}>{formatters[index](complex[field]) || "N/A"}</Box>)

  return (
    <Box direction="row" justify="around">
      <Box>
        {names}
      </Box>
      <Box>
        {values}
      </Box>
    </Box>
  )
}

AdditionalInfo.propTypes = {
  complex: PropTypes.object.isRequired
}

export default AdditionalInfo
