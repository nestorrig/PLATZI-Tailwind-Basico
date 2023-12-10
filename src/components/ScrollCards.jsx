import ScrollCard from "./ScrollCard";

function ScrollCards() {
    return (
        <>
            <h2 className="Second-title">
                Our Remonedations
            </h2>
            <div className="w-full items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-4 lg:space-x-6 scrollbar">
                <ScrollCard
                    image="norway"
                    title="Norway"
                    description="Beautiful landscapes"
                />
                <ScrollCard
                    image="norway"
                    title="Norway"
                    description="Beautiful landscapes"
                />
                <ScrollCard
                    image="norway"
                    title="Norway"
                    description="Beautiful landscapes"
                />
                <ScrollCard
                    image="norway"
                    title="Norway"
                    description="Beautiful landscapes"
                />
                <ScrollCard
                    image="norway"
                    title="Norway"
                    description="Beautiful landscapes"
                />
                <ScrollCard
                    image="norway"
                    title="Norway"
                    description="Beautiful landscapes"
                />
                <ScrollCard
                    image="norway"
                    title="Norway"
                    description="Beautiful landscapes"
                />
            </div>
        </>
    )
}
export default ScrollCards;