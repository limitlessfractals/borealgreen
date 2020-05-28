import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import App from '../components/Typeform'


const Signup = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>
        
     
        <App />

    </Layout>
    
)


export default Signup