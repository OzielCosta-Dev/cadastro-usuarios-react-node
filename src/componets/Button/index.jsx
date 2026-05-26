import PropTypes from 'prop-types'
import { Button } from './styles'



function DefaultButton({ children, theme, border, ...props}) {
// spread operator para passar as props para o componente Button, como onClick, type, etc

    return (
            <Button {...props} theme={theme} border={border}>{children}</Button>
    )
}


DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string,
    border: PropTypes.string
}

export default DefaultButton
