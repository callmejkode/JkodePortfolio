import React, {useState} from 'react';
import {BsChevronCompactUp} from 'react-icons/bs';
import { Button } from './Styles';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<Button>
	<BsChevronCompactUp onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none',border:"1px solid rgba(204, 201, 201, 0.62)",padding:"4px",borderRadius:"20px"}} />
	</Button>
);
}

export default ScrollButton;
