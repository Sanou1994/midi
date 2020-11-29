

import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import $ from 'jquery';

class CreationCompte extends Component {

    // info(){
    //     alert(
    //     <div class="alert alert-primary" role="alert">
    //         Réussit !
    //     </div>);
    // }


  render() {

    return (
      <>
        <div class ="row-12">
          <div class="card  text-white bg-dark">
            <div class="card-body align-middle">
              <h1>Création des comptes</h1>
            </div>
          </div>
        </div>

        <div class="card">
        <div class="card-body">
        <form novalidate>

            <div class="form-row">
                <div class="col-md-3 mb-3">
                    <label for="validationCustom01">Nom</label>
                    <input type="text" class="form-control" id="validationCustom01" placeholder="Nom"  required/>
                    
                </div>

                <div class="col-md-3 mb-3">
                    <label for="validationCustom02">Prénom</label>
                    <input type="text" class="form-control" id="validationCustom02" placeholder="Prénom" required/>
                    
                </div>

                <div class="col-md-3 mb-3">
                    <label for="validationCustom02">Numéro de téléphone</label>
                    <input type="text" class="form-control" id="validationCustom02" placeholder="Numéro de téléphone" required/>
                    
                </div>

                <div class="col-md-3 mb-3">
                    <label for="validationCustom02">Agence</label>
                    <input type="text" class="form-control" id="validationCustom02" placeholder="Agence" required/>
                    
                </div> 
            </div>


            <div class="form-row">

                <div class="col-md-6 mb-3">
                    <label for="validationCustomUsername">Pseudonyme</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend"><i class="fa fa-at"></i></span>
                        </div>
                            <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required/>
                    </div>
                </div>

                <div class="col-md-6 ">
                    <label for="inputPassword6">Mot de passe</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend"> <i class="fa fa-lock"></i></span>
                        </div>
                            <input type="password" id="inputPassword6" class="form-control" placeholder="Mot de passe" aria-describedby="passwordHelpInline"/>
                    </div>
                </div>

            </div>

            <button class="btn btn-primary" type="submit">Créer le compte</button>
            </form>
        </div>
        </div>

            



      </>
    )
  }
}

export default CreationCompte;