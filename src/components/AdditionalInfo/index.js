import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

import StudentCapacityIcon from '../../../static/icons/students.svg';
import ParkingSpacesIcon from '../../../static/icons/parking-lot.svg';
import ProcessingFeeIcon from '../../../static/icons/fees.svg';
import SecurityDepositIcon from '../../../static/icons/deposit.svg';

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

const AdditionalInfo = ({ complex }) => {
  const names = fieldNames.map((name, index) => (
    <Box direction="row">
      { icons[index] }
      <Box margin={{ bottom: "xsmall", left: "small" }}>{name}</Box>
    </Box>
  ))

  const values = fields.map(field => <Box margin={{bottom: "xsmall"}}>{complex[field] || "N/A"}</Box>)

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
