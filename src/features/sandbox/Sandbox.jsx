import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { openModal } from '../../app/common/modals/modalReducer'
import withReducer from '../../app/store/withReducer'
import testReducer, { decrement, increment } from './testReducer'

function Sandbox() {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.test)
  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data}</h3>
      <Button
        onClick={() => dispatch(increment(20))}
        content='Increment'
        color='green'
      />
      <Button
        onClick={() => dispatch(decrement(10))}
        content='Decrement'
        color='red'
      />
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
        }
        content='Open Modal'
        color='teal'
      />
    </>
  )
}

export default withReducer('test', testReducer)(Sandbox)
