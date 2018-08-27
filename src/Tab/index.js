import React from 'react'
import { Tab } from 'semantic-ui-react'

import Default from '../Pages/Login/Default'

const panes = [
  { menuItem: 'Pembeli', render: () => <Tab.Pane attached={false}><Default /></Tab.Pane> },
  { menuItem: 'Penjual', render: () => <Tab.Pane attached={false}><Default /></Tab.Pane> }
]

const MyTab = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default MyTab