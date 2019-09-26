import React from 'react';
import {NavLink} from "react-router-dom";
import './dropDownMenu.styles.css';


class DropDownMenu extends React.Component {
	container = React.createRef();
	state = {
		open: false,
	};
	componentDidMount() {
		document.addEventListener("mousedown", this.handleClickOutside);
	}
	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleClickOutside);
	}
	handleClickOutside = event => {
		if (this.container.current && !this.container.current.contains(event.target)) {
			this.setState({
				open: false,
			});
		}
	};
	handleButtonClick = () => {
		this.setState(state => {
			return {
				open: !state.open,
			};
		});
	};
	render() {
		return (
				<div ref={this.container}>
					<div className="button" onClick={this.handleButtonClick}>
						<NavLink className='navLinks' to={'/ViewProfile'}><img src={require('../icons8-user-64.png')} alt='Profile' className='cart'/></NavLink>
					</div>
					{this.state.open && (
						<div className="container">
							<ul>
								<li><NavLink className='navLinks' to={'/LogIn'}>Log In</NavLink></li>
								<li><NavLink className='navLinks' to={'/SignUp'}>SignUp</NavLink></li>
								<li><NavLink className='navLinks' to={'/EditProfile'}>Edit Profile</NavLink></li>
							</ul>
						</div>
					)};
				</div>
		);
	}
}

export default DropDownMenu;
