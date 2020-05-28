import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import App from '../components/Typeform'


const Signup = (props) => (
    <Layout>
        <Helmet>
            <title>Sign up</title>
            <meta name="description" content="Sign up for Boreal Green" />
        </Helmet>
        
     
        <App />

    </Layout>
    
)


export default Signup