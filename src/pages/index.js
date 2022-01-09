import Layout from '../layout/Layout'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Technologies />
      <Projects />
    </Layout>
  )
}

export default Home
