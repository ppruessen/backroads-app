import { socialLinks } from '../data';
import PageLinks from './PageLinks';

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass={'footer-links'} itemClass={'footer-link'}/>
      <ul className="footer-icons">
        { socialLinks.map((link) => {
          const { id, iconClass, href } = link;
          return (
            <li key={id}>
              <a href={href} target="_blank" rel="noreferrer" className="footer-icon">
                <i className={iconClass}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer