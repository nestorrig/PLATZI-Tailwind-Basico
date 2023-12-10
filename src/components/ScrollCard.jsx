/* eslint-disable react/prop-types */
function ScrollCard({image, title, description}) {
    return (
        <div className="bg-white even:bg-secondary text-terciary even:text-white rounded-lg min-w-[160px] md:min-w-[272px] shadow-lg">
            <div className={`${image} bg-cover bg-center h-28 md:h-48 rounded-t-lg`}></div>
            <div className="p-4 h-20 md:h-36">
                <h3 className="text-sm md:text-2xl font-semibold mb-1">{title}</h3>
                <p className="text-[9px] md:text-base">{description}</p>
            </div>
        </div>
    )
}
export default ScrollCard;