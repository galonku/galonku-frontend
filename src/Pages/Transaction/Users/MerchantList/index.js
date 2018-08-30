import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import getMerchants from '../../../../function/GetMerchants'

class SelectMerchant extends React.Component {
  constructor(props) {
    super(props)
    this.state = { merchants: [] }
  }

  render() {
    return (<Dropdown placeholder='Pilih penjual' fluid search selection options={this.state.merchants} onChange={this.handleChange} />)
  }

  handleChange = (event, { value }) => {
    this.props.merchantSelected(value)
  }

  componentDidMount() {
    const callMerchants = async () => {
      const merchants = await getMerchants('/')
      this.setState({
        merchants
      })
    }
    callMerchants()
  }
}

export default SelectMerchant