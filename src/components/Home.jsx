

const Home = () => {
    return (
        <section className="relative w-full h-[480px] bg-sanFrancisco lg:bg-sanFranciscoDesktop bg-cover bg-center md:pl-16 ">
            <h1 className="hidden md:block pt-32 text-black text-3xl font-bold">
                Find more locations like this
            </h1>
            <button className="w-48 h-12 bg-white text-primary font-medium text-base rounded-3xl absolute bottom-5 md:static md:mt-9">
                Explore More
            </button>
        </section>
    )
}
export default Home;