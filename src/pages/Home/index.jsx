import HomeSectionA from "./Sections/HomeSectionA"
import HomeSectionB from "./Sections/HomeSectionB"
import HomeSectionC from "./Sections/HomeSectionC"
import Carousel from "../../components/Carousel/Carousel.jsx"
import HomeSectionB2 from "./Sections/HomeSectionB2"

const Home = () => (
  <>
    <Carousel />
    <HomeSectionA />
    <HomeSectionB2 />
    <HomeSectionB />
    <HomeSectionC />
  </>
)

export default Home
