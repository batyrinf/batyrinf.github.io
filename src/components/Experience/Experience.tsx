const Experience: React.FC<any> = ({company, level, description, date}) => {
    return (
        <div className="mb-4 lg:mb-7">
            <small className="bg-gray-900 text-white px-2 py-1"> {date} </small>
            <h3 className="font-montserrat-bold text-md lg:text-xl text-gray-700 mt-1"> {level} </h3>
            <h4 className="text-sm lg:text-md text-gray-500"> {company} </h4>
            <p className="text-sm lg:text-md text-gray-500"> {description} </p>
        </div>
    )
}

export default Experience