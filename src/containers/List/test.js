import React from "react"
import { render } from '@testing-library/react'

import { List } from "./"

describe('<List />', function () {
  it('does not crash on render', function () {
    const data = {
      postgres: {
        allComplexesList: [
          { id: "1010", name: "foo"},
          { id: "2020", name: "bar"}
        ]
      }
    }

    render(<List data={data}/>)
  });
});
