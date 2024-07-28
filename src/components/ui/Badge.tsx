
const Badge = ({title} : {title: string}) => {
  return (
    <span className="w-fit h-fit bg-black text-white px-4 py-2 rounded-xl mr-4 mb-4">
      {title}
    </span>
  )
}

export default Badge
