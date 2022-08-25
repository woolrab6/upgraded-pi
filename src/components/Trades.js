import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Panel from 'react-bootstrap/lib/Panel'
import Row from 'react-bootstrap/lib/Row'
import {injectIntl} from 'react-intl'
import TradeTable from './TradeTable'
import {setTitle} from '../lib/utils'

class Trades extends React.Component {
  render() {
    setTitle('Trades')
    const {formatMessage} = this.props.intl
    return (
      <Grid>
        <Row>
          <Panel header={formatMessage({id: 'trades'})}>
            <TradeTable limit={50} usePaging />
          </Panel>
        </Row>
      </Grid>
    )
  }
}

export default injectIntl(Trades)
