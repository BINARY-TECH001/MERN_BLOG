import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        {/* <Sidebar /> */}
        <Footer />
      </div>
    </>
  )
}

export default Home
