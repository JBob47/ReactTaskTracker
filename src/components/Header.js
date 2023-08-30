import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd }) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button
            onClick = {onAdd}
            color={showAdd ? 'red' : 'green'}
            text={showAdd ? 'Close' : 'Add'}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// Styling Components In JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'blue',
// }

export default Header