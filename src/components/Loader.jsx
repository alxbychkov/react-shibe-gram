import ContentLoader from "react-content-loader"

const Loader = () => {
    return (
    <ContentLoader 
        speed={2}
        width={210}
        height={204}
        viewBox="0 0 210 204"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
    <rect x="14" y="10" rx="40" ry="40" width="182" height="182" />
    </ContentLoader>
    )
}

export default Loader