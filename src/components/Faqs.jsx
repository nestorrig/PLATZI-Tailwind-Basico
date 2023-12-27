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
            <h2 className="Second-title font-bold md:text-[48px]" id="Faqs">
                FAQs
            </h2>
            <section className="pb-14 md:pb-20">
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
        <details className="mb-3 md:mb-8" open>
            <summary className="text-base md:text-[24px] text-primary dark:text-gray font-semibold mb-2 md:mb-4">{title}</summary>
            <p className="text-[12px] md:text-xl dark:text-white">{description}</p>
        </details>
    )
}