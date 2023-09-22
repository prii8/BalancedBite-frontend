import ContentLoader from "react-content-loader"

const CardLoaderMobile = () => {
  return (
    <ContentLoader 
    speed={1}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#c3c4c3"
    foregroundColor="#e9e9e9"
  >
    <rect x="11" y="9" rx="6" ry="6" width="114" height="85" /> 
    <rect x="137" y="15" rx="2" ry="2" width="169" height="20" /> 
    <rect x="136" y="73" rx="10" ry="10" width="183" height="21" /> 
    <circle cx="338" cy="83" r="15" /> 
    <rect x="140" y="61" rx="1" ry="1" width="107" height="8" />
  </ContentLoader>
  )
}

export default CardLoaderMobile