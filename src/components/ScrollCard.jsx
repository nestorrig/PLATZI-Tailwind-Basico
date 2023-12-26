/* eslint-disable react/prop-types */
function ScrollCard({image, title, description}) {
    return (
        <article className="
            relative bg-white even:bg-secondary 
            text-terciary even:text-white 
            rounded-lg shadow-md
            min-w-[160px] md:min-w-[272px]
            transition duration-300
            hover:-translate-y-4
            ">
            <div className={`${image} bg-cover bg-center h-28 md:h-48 rounded-t-lg`}></div>
            <footer className="p-4 h-20 md:h-36">
                <h3 className="text-sm md:text-2xl font-semibold mb-1">{title}</h3>
                <p className="text-[9px] md:text-base">{description}</p>
            </footer>
        </article>
    )
}
export default ScrollCard;