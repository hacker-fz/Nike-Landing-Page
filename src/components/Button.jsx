const Button = ({label, iconUrl, backgroundColor, textColor, borderColor, fullWidth, roundedFull}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red border-coral-red text-white'}
      ${fullWidth && 'w-full'}
      ${roundedFull ? 'rounded-full' : 'rounded-lg'}
     `}>
        {label}
        {iconUrl && <img src={iconUrl} alt="icon" className="ml-2 rounded-full w-5 h-5"/> }
    </button>
  )
}

export default Button