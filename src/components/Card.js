import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../contexts/theme';

const Card = ({ header, subheader, avatar, href, name, children }) => {
    const theme = useContext(ThemeContext);

    return (
        <div className={`card bg-${theme}`}>
            <h4 className="header-lg center-text">
                {header}
            </h4>
            <img src={avatar} alt={`Avatar for ${name}`} className="avatar" />
            {subheader && (
                <h4 className="center-text">
                    {subheader}
                </h4>
            )}
            <h2 className="center-text">
                <a href={href} className="link">
                    {name}
                </a>
            </h2>
            {children}
        </div>
    )
}

Card.propTypes = {
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default Card;


