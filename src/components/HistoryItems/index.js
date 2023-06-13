import './index.css'

const HistoryItems = props => {
  const {historyItem, onclickDel} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onDelEl = () => {
    onclickDel(id)
  }

  return (
    <li className="li-con">
      <div className="el-con">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="domain-name">{domainUrl}</p>
        <button
          data-testid="delete"
          id="delete"
          type="button"
          className="button"
          onClick={onDelEl}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItems
