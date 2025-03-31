export default function Rectangle() {
    return (
    <div 
    className="absolute w-[1440px] h-[193px] max-w-full"
    style={{
      background: 'linear-gradient(to right, #96A5B4 50%, #FFFFFF 100%)',
      top: 'calc(50% - 193px/2 - 100px)',
      zIndex: -1
    }}
  ></div>
)
}