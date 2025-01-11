
const Card = ({icon, title, description}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 shadow-lg rounded-lg p-6 max-w-xs text-center">
      {/*Icon */}
      <div className="text-blue-500 text-4xl mb-2">
        <i className={icon}></i>
      </div>

      {/* Title */}
      <h1 className="text-xl font-semibold mb-8">{title}</h1>

      {/* Description */}
      <p className="text-gray-700 ">{description}</p>
    </div>
  )
}

export default Card