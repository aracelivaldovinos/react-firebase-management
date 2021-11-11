import useFirestore from "../hooks/useFirestore";

const Home = () => {

  useFirestore('Batches')

  return (
  <div className="home">
    Home
  </div> );
}
 
export default Home;