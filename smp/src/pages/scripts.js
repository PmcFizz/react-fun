
import { connect } from 'dva'
import ScriptList from '../components/ScriptList'

const Scripts = ({dispatch, scripts}) => {
  function handleDelete(id) {
    dispatch({
      type: 'scripts/delete',
      payload: id,
    })
  }

  return (
    <div>
      <h2>List of Scripts</h2>
      <ScriptList onDelete={handleDelete} scripts={scripts} />
    </div>
  )
}

export default connect(({scripts}) => ({
  scripts,
}))(Scripts);

