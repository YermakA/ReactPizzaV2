import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = (props: any) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    minHeight={650}
    viewBox="0 0 400 650"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="68" y="327" rx="3" ry="3" width="327" height="60" />
    <rect x="75" y="543" rx="3" ry="3" width="104" height="37" />
    <rect x="71" y="394" rx="15" ry="15" width="323" height="130" />
    <rect x="221" y="535" rx="30" ry="30" width="180" height="54" />
    <rect x="202" y="490" rx="0" ry="0" width="8" height="6" />
    <circle cx="231" cy="158" r="160" />
  </ContentLoader>
)

export default PizzaSkeleton