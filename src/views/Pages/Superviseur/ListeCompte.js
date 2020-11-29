

import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import $ from 'jquery';

class ListeCompte extends Component {

  render() {

    return (
      <>

        <div class ="row-12">
          <div class="card  text-white bg-dark">
            <div class="card-body align-middle">
              <h1>Liste des comptes</h1>
            </div>
          </div>
        </div>

      </>
    )
  }
}

export default ListeCompte;