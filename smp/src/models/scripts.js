export default {
  namespace: 'scripts',
  state: [],
  reducers: {
    delete(state, {payload: id}) {
      return state.filter(item => item.id !== id)
    }
  }
}