const PlayerCard = ({ avatar, location, name, title }) => {
  return (
    <figure className="md:flex flex-col bg-gray-100 rounded-xl p-8 m">
      <img className="w-32 h-32 rounded-full mx-auto" src={avatar} alt="" width="384" height="512" />
      <div className="pt-6 text-center space-y-4">
        <figcaption className="font-medium">
          <div className="text-cyan-600">
            {name}
          </div>
          <div className="text-gray-500">
            {location}
          </div>
          <div className="text-gray-500">
            {title}
          </div>
        </figcaption>
      </div>
    </figure>
  )
}

export default PlayerCard;