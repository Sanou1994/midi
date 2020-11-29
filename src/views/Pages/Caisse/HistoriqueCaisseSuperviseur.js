

import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Dropdown, Row, Table } from 'reactstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import $ from 'jquery';
import DropDownListeCaissier from './DropDownListeCaissier';

class HistoriqueCaisse extends Component {

  render() {

    return (
      <>

        <div class ="row-12">
            <div class="card  text-white bg-dark">
            <div class="card-body align-middle">
                <h1>Historique de la caisse</h1>
            </div>
            </div>
        </div>

    {/* <select class="selectpicker" 
        data-style="btn-success"> 
        <option>Pizzas</option> 
        <option>Burger</option> 
        <option>Ice Cream</option> 
        <option>Fried Potatoes</option> 
    </select>  */}
    <div class="card text-white bg-dark">
    <div class="card-body align-middle">
    <form>
        <div class="row">

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <small for="sel1">Caissier</small>
                  <select class="form-control" id="sel1">
                    <option>NANA Cédric</option>
                    <option>SANOU Arouna</option>
                    <option>OUEDRAOGO Mahamadi</option>
                    
                  </select>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <small for="sel1">Date</small>
                  <select class="form-control" id="sel1">
                    <option>22/12/2020</option>
                    <option>23/12/2020</option>
                    <option>24/12/2020</option>
                    <option>25/12/2020</option>
                </select>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            
                <small for="sel1">Trier par </small>
                
                  <select class="form-control" id="sel1">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                </select>
                
            </div>

        </div>
    </form>
    </div>
</div>
        
        
        <div class="table-responsive">
            <div class="table-wrapper">
                
                <div class="card">
                <div class="card-body">
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            
                            <th>Date <i class="fa fa-sort"></i></th>
                            <th>Opérateur <i class="fa fa-sort"></i></th>
                            <th>Opération <i class="fa fa-sort"></i></th>
                            <th>Décaiss <i class="fa fa-sort"></i></th>
                            <th>Encaiss <i class="fa fa-sort"></i></th>
                            <th>Frais <i class="fa fa-sort"></i></th>
                            <th>Commission <i class="fa fa-sort"></i></th>
                            <th>Numéro <i class="fa fa-sort"></i></th>
                            <th>Sens <i class="fa fa-sort"></i></th>
                            <th>Référence <i class="fa fa-sort"></i></th>
                            <th>Crédit <i class="fa fa-sort"></i></th>
                            <th>Débit <i class="fa fa-sort"></i></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>
                                <a href="/#/modifierencaissement" class="edit" title="Modifier" data-toggle="tooltip"><i className="fa fa-edit">  </i></a>
                                <a href="#" class="delete" title="Supprimer" data-toggle="tooltip"><i className="fa fa-trash">  </i></a>
                                <a href="#" class="view" title="Détails" data-toggle="tooltip"><i className="fa fa-eye">  </i></a>
                                
                            </td>
                        </tr>
                        <tr>
                            
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>Rien</td>
                            <td>
                                <a href="/#/modifierdecaissement" class="edit" title="Modifier" data-toggle="tooltip"><i className="fa fa-edit"></i></a>
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
                         
                    </tbody>
                </Table>
                </div>
                </div>
                {/* <div class="clearfix">
                    <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                    <ul class="pagination">
                        <li class="page-item disabled"><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
                        <li class="page-item"><a href="#" class="page-link">1</a></li>
                        <li class="page-item"><a href="#" class="page-link">2</a></li>
                        <li class="page-item active"><a href="#" class="page-link">3</a></li>
                        <li class="page-item"><a href="#" class="page-link">4</a></li>
                        <li class="page-item"><a href="#" class="page-link">5</a></li>
                        <li class="page-item"><a href="#" class="page-link"><i class="fa fa-angle-double-right"></i></a></li>
                    </ul>
                </div> */}
            </div>
        </div>   


      </>
    )
  }
}

export default HistoriqueCaisse;