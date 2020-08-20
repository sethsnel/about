import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <img src="images/seth-circle.png" style={{ width: '5.5rem' }} />
        <div className="content">
            <div className="inner">
                <h1>Seth Snel</h1>
                <p>C# en node.js web developer</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
