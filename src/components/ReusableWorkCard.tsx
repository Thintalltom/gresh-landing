
const ReusableWorkCard = ({image, title, description, label}: {image: string, title: string, description: string, label?: string}) => {
  return (
    <div className="bg-transparent rounded-xl border-[1px] border-[#E1E6E7] h-[576px] shadow-md overflow-hidden">
      <img src={image} alt={title} className="h-[260px] mx-auto" />
      <div className="p-4">
        <h3 className="text-[36px] font-bold text-[#F8FAFC]">{title}</h3>
        <p className="text-[#E1E6E7] text-[20px] mt-2">{description}</p>
        {label && <span className="inline-block mt-2 px-3 py-1 text-[#9C9898] text-[16px]">{label}</span>}
      </div>
    </div>
  )
}

export default ReusableWorkCard