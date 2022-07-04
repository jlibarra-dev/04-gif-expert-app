export const GifItem = ({title, url}) => {
  return (
    <div className="card">
        <img src={url} alt={title} width="250" height="200"></img>
        <p>{title}</p>
    </div>
  )
}
