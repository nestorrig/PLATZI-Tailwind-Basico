import ScrollCard from "./ScrollCard";

function ScrollCards() {
    return (
        <>
            <h2 className="Second-title">
                Our Remonedations
            </h2>
            <div className="w-full items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-4 lg:space-x-6 scrollbar">
                <ScrollCard
                    image="bg-norway"
                    title="Norway"
                    description="Beautiful landscapes"
                />
                <ScrollCard
                    image="bg-newyork"
                    title="New York"
                    description="Concrete jungle"
                />
                <ScrollCard
                    image="bg-yosemite"
                    title="Yosemite"
                    description="A break from the world"
                />
                <ScrollCard
                    image="bg-seattle"
                    title="Seattle"
                    description="Big City"
                />
                <ScrollCard
                    image="bg-switzerland"
                    title="Switzerland"
                    description="Big City"
                />
            </div>
        </>
    )
}
export default ScrollCards;