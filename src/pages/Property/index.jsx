import { useParams } from "react-router-dom"

function Propriété() {
  const {id} = useParams()

    return (
      <div>
        {id}
      </div>
    )
}
  
  export default Propriété