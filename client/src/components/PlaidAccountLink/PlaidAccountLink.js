
import React from 'react'
import PlaidLink from 'react-plaid-link'
import API from '../../utils/API'
import PlaidLinkMenuItem from './PlaidLinkMenuItem'

// materialize navbar
class PlaidAccountLink extends React.Component {
  handleOnSuccess (token, metadata) {
    // send token to client server
    console.log(metadata)

    const plaidObj = {
      token: token,
      metadata: metadata
    }

    API.getAccessToken(plaidObj)
      .then(plaidObj => {
        window.location.reload() // This should really be an api refresh, but for some reason, can't get that to work.
        console.log('plaidObj: ', plaidObj)
        this.props.refresh()
      }
      )
      .catch((err) => console.log)

    // API.createItem(plaidObj)
    //     .then(console.log)
    //     .catch(console.log);
  }

  render () {
    const products = ['transactions']
    return (
      <PlaidLinkMenuItem
        publicKey='1d68b777ea259a9dedc5cfb9510428'
        product={products}
        env='sandbox'
        clientName='plaidname'
        onSuccess={this.handleOnSuccess}
      >
        {this.props.children}
      </PlaidLinkMenuItem>
    )
  }
}

export default PlaidAccountLink
