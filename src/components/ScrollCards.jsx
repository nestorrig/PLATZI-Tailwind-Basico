import ScrollCard from "./ScrollCard";

const cardData = [
    { image: "bg-norway", title: "Norway", description: "Beautiful landscapes" },
    { image: "bg-newyork", title: "New York", description: "Concrete jungle" },
    { image: "bg-yosemite", title: "Yosemite", description: "A break from the world" },
    { image: "bg-seattle", title: "Seattle", description: "Big City" },
    { image: "bg-switzerland", title: "Switzerland", description: "Big City" },
];

function ScrollCards() {
    return (
        <>
            <h2 className="Second-title">
                Our Remonedations
            </h2>
            <div className="custom-scrollbar w-full items-center py-6 overflow-x-scroll overscroll-x-contain flex space-x-4 lg:space-x-6 overflow-visible">
                {cardData.map((card, index) => (
                    <ScrollCard
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </>
    );
}

export default ScrollCards;