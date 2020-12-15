import { Link } from 'react-router-dom';
const table = ({ titles, data }) => {
  return (
    <table className="border-collapse border border-green-800 table-auto">
      <thead>
        <tr>
          {titles.length > 0 && titles.map((title, i) => (
            <th key={i} className="border border-green-600">{title}</th>
          ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.length > 0 && data.map(info => (
            <tr key={info.player_id}>
              <td className="border border-green-600">{info.rank}</td>
              <td className="border border-green-600">
                <Link to={`/${info.username}`}>
                  {info.username}
                </Link>
              </td>
              <td className="border border-green-600">{info.title}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default table;