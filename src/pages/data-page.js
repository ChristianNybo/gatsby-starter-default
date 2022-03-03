import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const dataPage = () => (
  <Layout>
    <Seo title="Data Page" />
    <h1>This is where data is intended to be shown</h1>
    <p>... to be pulled from azure</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default dataPage
