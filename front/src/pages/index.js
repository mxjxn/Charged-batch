import * as React from "react";
import * as styles from "../components/index.module.css";

import Seo from "../components/seo";
import Layout from "../components/layout";

import { useWeb3Context } from "../context/Web3";
import { MainView } from "../components/MainView";
import { GLOBALS } from "../utils/globals";

const IndexPage = () => { 
  const [ web3 ] = useWeb3Context();

  const isNetworkSupported = () => {
    const supportedNetworks = Object.keys(GLOBALS.CONTRACT_ADDRESSES.chargedBatch);
    return supportedNetworks.includes(String(web3.chainId));
  };

  return (
    <Layout>
      <Seo title="Home" />
      <div className={styles.textCenter}>
        <h1>
          Welcome to <b>Massv!</b>
        </h1>
          {
           web3.isConnected ? isNetworkSupported() ? <MainView /> : 'Please select a supported network' : 
            'Please connect wallet'
          }
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
