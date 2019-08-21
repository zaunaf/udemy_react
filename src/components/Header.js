import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    // Pisahkan code render untuk user profile
    renderUser() {
        const {userData} = this.props;
        console.log(userData);
        // Pasang loading
        if (null === userData) {
            return <i className="fas fa-spinner fa-spin"/>
        }        
        return (<span>Hello {userData.Name}</span>);
    }
    render() {
        const {isAuthenticated} = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    React Blog
                </Link>
                <span className="navbar-text">
                    {/* Ubah render jadi memanggil ke renderuser */}
                    {isAuthenticated ? this.renderUser() : <Link to="/login">Sign-in</Link>}
                </span>
            </nav>
        )
    }
}