import React from 'react';

import {Button} from 'react-bootstrap';
import ActiveTickets from './activeTickets';
import MyPayments from './myPayments';
import MyPoinst from './myPoints';
import EditProfile from './editProfile';
import DefaultPage from './defaultPage';

class LoadingPage extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.handler();
    }
    render() {
        let choice = '';

        if (this.props.page_id === 0) {
            choice = <div><ActiveTickets user={this.props.user}/><Button onClick={this.handleClick}>Wróć</Button></div>
        }
        else if (this.props.page_id === 1) {
            choice = <div><MyPayments user={this.props.user}/><Button onClick={this.handleClick}>Wróć</Button></div>
        }
        else if (this.props.page_id === 2) {
            choice = <div><MyPoinst user={this.props.user}/><Button onClick={this.handleClick}>Wróć</Button></div>
        }
        else if (this.props.page_id === 3) {
            choice = <div><EditProfile user={this.props.user}/><Button onClick={this.handleClick}>Wróć</Button></div>
        }
        else {
            choice = <div><DefaultPage user={this.props.user}/></div>
        }

        return (
            <div className="header rounded col-md-12">
                {choice}
            </div>
        );
    }
}
export default LoadingPage;