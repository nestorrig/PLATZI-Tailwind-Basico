import ScrollCard from "./ScrollCard";

const cardData = [
    { image: "bg-norway", title: "Norway", description: "Beautiful landscapes" },
    { image: "bg-newyork", title: "New York", description: "Concrete jungle" },
    { image: "bg-yosemite", title: "Yosemite", description: "A break from the world" },
    { image: "bg-seattle", title: "Seattle", description: "Coffee and rain" },
    { image: "bg-switzerland", title: "Switzerland", description: "The Alps" },
    { image: "bg-sydney", title: "Sydney", description: "Opera House" },
    { image: "bg-europe", title: "Europe", description: "The old continent" },
    { image: "bg-iceland", title: "Iceland", description: "The land of ice and fire" },
];

function ScrollCards() {
    return (
        <>
            <h2 className="Second-title" id="Locations">
                Our Remonedations
            </h2>
            <section className="custom-scrollbar w-full items-center py-6 overflow-x-scroll overscroll-x-contain flex space-x-4 lg:space-x-6 overflow-visible">
                {cardData.map((card, index) => (
                    <ScrollCard
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </section>
        </>
    );
}

export default ScrollCards;