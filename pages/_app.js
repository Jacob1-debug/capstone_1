import Layout from '../components/Layout'
import "tailwindcss/tailwind.css"
import polling from './polling'
// import polling from '..pages'

function MyApp({ Component, pageProps }) {
  return (
    // <div>
    // </polling>
    // </div>
    <Layout>
      <div className="w-5/6 m-auto">
        <Component {...pageProps} />
       
      </div>
    </Layout>
    // </polling>
  )
}

export default MyApp