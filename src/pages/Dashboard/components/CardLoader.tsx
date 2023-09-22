import ContentLoader from "react-content-loader"

const CardLoader = () => (
    <ContentLoader 
    speed={1}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#c3c4c3"
    foregroundColor="#e9e9e9"
  >
    <rect x="11" y="10" rx="6" ry="6" width="293" height="329" /> 
    <rect x="21" y="353" rx="5" ry="5" width="228" height="20" /> 
    <rect x="11" y="404" rx="10" ry="10" width="286" height="23" /> 
    <circle cx="283" cy="366" r="18" /> 
    <rect x="23" y="383" rx="5" ry="5" width="204" height="5" />
  </ContentLoader>

)

export default CardLoader