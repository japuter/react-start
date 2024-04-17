import PropTypes from 'prop-types'

const Buttom = props => {
  const {text, handleClick} = props;
  return (
    <button

    className=' m-3 mt-0 p-3 rounded-lg bg-blue-800 text-stone-300'
     onClick={handleClick}
     >
      {text}
      </button>
  )
}

Buttom.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
}

export default Buttom
