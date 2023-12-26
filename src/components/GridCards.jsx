import { useState } from "react";

/* eslint-disable react/prop-types */
function GridCards() {
    return (
        <>
            <h2 className="Second-title">
                Trending Stays
            </h2>
            <section>
                <div>
                    <div>
                        <Card
                            image="bg-chicago"
                            title="Chicago"
                            description="2 rooms, bathroom and kitchen."
                            customStyles="md:mb-7"
                        />
                        <div className="md:flex md:gap-8">
                            <Card
                                image="bg-LA"
                                title="Los Angeles"
                                description="4 rooms, 3 bathrooms, kitchen and private pool."
                                customStyles="md:w-5/12 md:h-[828px]"
                            />
                            <div className="md:w-7/12">
                                <Card
                                    image="bg-miami"
                                    title="Miami"
                                    description="3 rooms, 2 bathrooms, kitchen and amazing sea view."
                                    customStyles="md:mb-7"
                                />
                                <Card
                                    image="bg-bali"
                                    title="Bali"
                                    description="2 rooms, 2 bathrooms Kitchen and private pool"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default GridCards;

function Card({image, customStyles, title, description}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <article 
                className={`text-card ${customStyles}`}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
            >
                <div className={`image-card ${image} ${isHovered ? 'image-hover' : ''}`}>
                </div>
                <div className="text-white w-[200px] md:w-full md:max-w-[300px] md:text-end">
                    <h3 className="font-extrabold text-2xl md:text-4xl mb-3 md:mb-6">
                        {title}
                    </h3>
                    <p className="font-medium text-base md:text-2xl">
                        {description}
                    </p>
                </div>
            </article>
        
        </>
    )
}