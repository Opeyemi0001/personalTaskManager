
const Card = ({icon, title, description}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 max-w-xs text-center">
      {/*Icon */}
      <div className="text-blue-500 text-4xl mb-4">
        <i className={icon}></i>
      </div>

      {/* Title */}
      <h1 className="text-xl font-semibold mb-2">{title}</h1>

      {/* Description */}
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default Card