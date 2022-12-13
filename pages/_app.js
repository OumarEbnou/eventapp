import Layout from '../component/layout/layout'
import '../styles/globals.css'
import Notification from '../component/ui/notification'
function MyApp({ Component, pageProps }) {
  return <Layout>
            <Component {...pageProps} />
            <Notification title="oumar" message="nte grd"  status="error" />
          </Layout>
}

export default MyApp