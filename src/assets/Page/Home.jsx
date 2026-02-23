import img1 from "../images/Home.webp"

const Home = () => {
    return (
        <>
            <img src={img1} alt="Home" className="w-100" />

             <p className="lead text-center bg-dark text-white p-4">
          Welcome to SwimZone Swimming Pool, where fitness meets fun and relaxation.
          Our modern swimming facility is designed for all age groups, from beginners
          to professional swimmers. We provide clean water, certified trainers,
          and a safe environment to ensure a comfortable swimming experience.
          Whether you want to improve your health, learn swimming techniques,
          or simply enjoy a refreshing break from your daily routine,
          our swimming pool is the perfect place for you.
          Join us today and experience a healthy lifestyle with confidence and enjoyment.
        </p>
        </>
    )
}
export default Home