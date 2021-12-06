import './ResultCard.css'

export const ResultCard = ({ data }) => {


  // API:  'MalShare'
  // Auth:  'apiKey'
  // Category:  'Anti-Malware'
  // Cors:  'no'
  // Description:  'Malware Archive / file sourcing'
  // HTTPS:  true
  // Link:  'https: //malshare.com/doc.php'

  // console.log(data)
  return (
    <article className='result-card'>
      <h3 className='card-api'>{data.API}</h3>
      <div className='card-data-wrapper'>
        <span className='card-data'>Auth: </span>
        <span className='card-data'>{data.Auth}</span>
      </div>
      <div className='card-data-wrapper'>
        <span className='card-data'>Category: </span>
        <span className='card-data'>{data.Category}</span>
      </div>
      <div className='card-data-wrapper'>
        <span className='card-data'>Cors: </span>
        <span className='card-data'>{data.Cors}</span>
      </div>
      <div className='card-data-wrapper'>
        <span className='card-data'>Description: </span>
        <span className='card-data'>{data.Description}</span>
      </div>
      <div className='card-data-wrapper'>
        <span className='card-data'>HTTPS: </span>
        <span className='card-data'>{data.HTTPS.toString()}</span>
      </div>
      <div className='card-data-wrapper'>
        <span className='card-data'>Link: </span>
        <a href={data.Link} className='card-data card-data-link'>{data.Link}</a>
      </div>
    </article>
  )
}