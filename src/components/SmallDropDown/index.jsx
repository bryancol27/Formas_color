import React, { useState } from 'react';

// Import custom styles
import { ContainerSmallDropDown } from './styles';

// Import propTypes
import PropTypes from 'prop-types';

const SmallDropDown = ({ texts }) => {

    const [ open, setOpen ] = useState(false);

    return (
        <ContainerSmallDropDown>
            <div 
                className='HeaderDropDown'
                onClick={() => setOpen(!open)}
            >
                <span className="icon"></span>
                <h3>{texts.title}</h3>
            </div>

            <div 
                className={`contentDropDown ${open ? 'open' : 'hidden'}`}
            >
                <p>{texts.content}</p>
            </div>
        </ContainerSmallDropDown>
    );
};

SmallDropDown.propTypes = {
    texts: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string
    })
};

export { SmallDropDown };