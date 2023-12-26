/* eslint-disable react/prop-types */
const faqData = [
    { 
        title: "Payment Methods",
        description: "We accept VISA, MasterCard, American Express, Paypal and Binances" 
    },
    { 
        title: "Cancellation Policy",
        description: "The cancellation policy is very flexible, you can cancel your reservation up to 24 hours before your arrival" 
    },
    { 
        title: "Long Stays",
        description: "If you want to stay for a long time, you can contact us and we will make a special price for you" 
    },
    { 
        title: "Refund Policy",
        description: "If you cancel your reservation within 24 hours of your arrival, we will refund 100% of your money" 
    },
    { 
        title: "Travel Insurance",
        description: "We recommend that you purchase travel insurance to protect your trip from unforeseen circumstances" 
    },
];

function Faqs() {
    return (
        <>
            <h2 className="Second-title font-bold md:text-[38px]">
                FAQs
            </h2>
            <section>
                {faqData.map((card, index) => (
                    <TextCard
                        key={index}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </section>
        </>
    );
}
export default Faqs;

function TextCard({title, description}) {
    return (
        <article className="mb-3 md:mb-12">
            <h3 className="text-base md:text-[35px] text-primary font-semibold mb-2 md:mb-7">{title}</h3>
            <p className="text-[12px] md:text-xl">{description}</p>
        </article>
    )
}