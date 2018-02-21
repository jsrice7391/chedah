
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PlaidLink from "react-plaid-link";
import API from "../../utils/API";


// materialize navbar
class PlaidAccountLink extends React.Component {
    
    handleOnSuccess(token, metadata) {
        // send token to client server
        console.log(metadata);

        const plaidObj = {
            token: token,
            metadata: metadata
        }
        API.createItem(plaidObj)
            .then(console.log)
            .catch(console.log);
        
    }

    render(){
        return (
        <PlaidLink
            publicKey="1d68b777ea259a9dedc5cfb9510428"
            product='transactions'
            env="sandbox"
            clientName="plaidname"
            onSuccess={this.handleOnSuccess}
            >
            {this.props.children}
            </PlaidLink>
        );
    }
        
}

export default PlaidAccountLink;