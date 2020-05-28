import React from 'react';
import './App.css';
import {Button, Col, Row} from 'react-bootstrap';
import LoadingPage from './LoadingPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_page: '',
      user_name: "Daria"
    };

    this.handleClick = this.handleClick.bind(this);
    this.handler = this.handler.bind(this);
  }

  handleClick(e, id){
    this.setState(state => ({
      id_page: id
    }));
  }
  handler() {
    this.setState(state => ({
      id_page: ''
    }));
  }

  render() {
    return(
    <div className="App">
      <style type="text/css">
        {`
        .btn-flat {
          background-color: #1592E6;
          color: white; 
          border-radius: 0;
          width: 250px !important;
          margin: auto;
        }
        .btn-flat:hover {
          background-color: #003058;
          color: white;
        }

        .btn-xxl {
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
        }
        .change_color {
          background-color: #003058;
          color: white;
        }
        `}
      </style>
      <header className="App-header">
        <Row className="vertical-divider container-fluid">
          <Col xs={4}>
            <img src="user.png" className="img-thumbnail" alt="user_image"/>
            <div className="mb-2">{this.state.user_name}</div>
            <div className="mb-2">
              <Button className={this.state.id_page===0 ? 'change_color': null} variant="flat" value="0" onClick={e => this.handleClick(e, 0)}>
                Aktywne bilety
              </Button>
            </div>
            <div className="mb-2">
              <Button className={this.state.id_page===1 ? 'change_color': null} variant="flat" value="1" onClick={e => this.handleClick(e, 1)}>
                Moje płatności
              </Button>
            </div>
            <div className="mb-2">
              <Button className={this.state.id_page===2 ? 'change_color': null} variant="flat" value="2" onClick={e => this.handleClick(e, 2)}>
                Moje punkty
              </Button>
            </div>
            <div className="mb-2">
              <Button className={this.state.id_page===3 ? 'change_color': null} variant="flat" value="3" onClick={e => this.handleClick(e, 3)}>
                Edytuj profil
              </Button>
            </div>
          </Col>
          <Col xs={8}>
            <LoadingPage user={this.state.user_name} page_id={this.state.id_page} handler={this.handler}/>
          </Col>
        </Row>
      </header>
    </div>
  );
  }
}

export default App;
