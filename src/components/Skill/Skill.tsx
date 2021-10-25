const Skill: React.FC<any> = ({logo, title}) => {
    return (
        <div className="col-span-6 lg:col-span-3 flex flex-col items-center justify-center text-center w-full border px-5 py-3">
            <img
                src={logo}
                className="h-8 lg:h-12"
                alt={title}
            />
            <p className="font-montserrat-bold text-sm mt-3">
                { title }
            </p>
        </div>
    )
}

export default Skill