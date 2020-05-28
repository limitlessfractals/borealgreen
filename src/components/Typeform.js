import React from 'react'
import Helmet from 'react-helmet'
import Layout from './layout'

import pic11 from '../assets/images/pic11.jpg'
import { ReactTypeformEmbed } from 'react-typeform-embed';

class App extends React.Component {
    render() {
      return <ReactTypeformEmbed url="https://borealgreensystems.typeform.com/to/zS9cEA" />;
    }
  }


export default App