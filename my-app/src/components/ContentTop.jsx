import Categories from './Categories'
import Sort from './Sort'
const ContentTop = ({ sortType, num, getCategoryId, getSortType }) => {


  return (
    <div className="content__top">
      <Categories num={num} getCategoryId={getCategoryId} />
      <Sort sortType={sortType} getSortType={getSortType} />
    </div>
  )
}

export default ContentTop