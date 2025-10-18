import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

function DemoCalculoRemuneracion() {

    const [sueldoBruto, setSueldoBruto] = useState(0);
    const [gratificacionLegal, setGratificacionLegal] = useState(0);
    const [tipoPrevision, setTipoPrevision] = useState("");
    const [bonoColacion, setBonoColacion] = useState(0);
    const [bonoMovilizacion, setBonoMovilizacion] = useState(0);
    const [bonoViatico, setBonoViatico] = useState(0);

    // porcentajes
    const porcentajeSalud = tipoPrevision == 1 ? 0.07 : 0.1;
    const porcentajeSeguroCesantia = 0.03;
    const porcentajeImpuestoUnico = 0.01;

    // variables de resultado
    const resultadoBonoColacion = parseInt(bonoColacion);
    const resultadoBonoMovilizacion = parseInt(bonoMovilizacion);
    const resultadoBonoViatico = parseInt(bonoViatico);
    const resultadoSueldoImponible = parseInt(sueldoBruto) + parseInt(gratificacionLegal);
    const resultadoDescuentoAFP = resultadoSueldoImponible * 0.1;
    const resultadoDescuentoSalud = resultadoSueldoImponible * porcentajeSalud;
    const resultadoDescuentoSeguroCesantia = resultadoSueldoImponible * porcentajeSeguroCesantia;
    const resultadoDescuentoImpuestoUnico = resultadoSueldoImponible * porcentajeImpuestoUnico;

    // Liquido a pagar
    const liquidoAPagar = resultadoSueldoImponible + resultadoBonoColacion + resultadoBonoMovilizacion + resultadoBonoViatico - resultadoDescuentoAFP - resultadoDescuentoSalud - resultadoDescuentoSeguroCesantia - resultadoDescuentoImpuestoUnico;

    console.log(resultadoDescuentoSalud);

    return (

        <div>
            <div className='row mt-3'>
                <div className='col-lg-12 text-center bg-secondary text-white rounded p-3'>
                    <h3>DEMO:</h3>
                    <h3>Cotizador de Componentes</h3>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-6'>
                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='sueldoBruto'>Precio CPU</label>
                        <input className='form-control' id='sueldoBruto' name='sueldoBruto' placeholder='1000000' value={sueldoBruto} onChange={(e) => setSueldoBruto(e.target.value)} ></input>
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='gratificacionLegal'>Precio GPU (por modulo)</label>
                        <input className='form-control' id='gratificacionLegal' name='gratificacionLegal' placeholder='1000000' value={gratificacionLegal} onChange={(e) => setGratificacionLegal(e.target.value)} ></input>
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='tipoPrevision'>Cantidad modulos RAM</label>
                        <select className='form-select' id="tipoPrevision" name='tipoPrevision' value={tipoPrevision} onChange={(e) => setTipoPrevision(e.target.value)}>
                            <option>Seleccione su previsión</option>
                            <option value={1}>Fonasa</option>
                            <option value={2}>Isapre</option>
                        </select>
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='bonoColacion'>Garantia</label>
                        <input className='form-control' id='bonoColacion' name='bonoColacion' placeholder='1000000' value={bonoColacion} onChange={(e) => setBonoColacion(e.target.value)} ></input>
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='bonoMovilizacion'>Descuento</label>
                        <input className='form-control' id='bonoMovilizacion' name='bonoMovilizacion' placeholder='1000000' value={bonoMovilizacion} onChange={(e) => setBonoMovilizacion(e.target.value)} ></input>
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='bonoViatico'>Bono viático</label>
                        <input className='form-control' id='bonoViatico' name='bonoViatico' placeholder='1000000' value={bonoViatico} onChange={(e) => setBonoViatico(e.target.value)} ></input>
                    </div>
                </div>

                <div className='col-lg-6'>
                    <h3 className='my-3'>Resultados</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Concepto</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Subtotal</td>
                                <td>{resultadoSueldoImponible.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>IVA (19%)</td>
                                <td>{resultadoDescuentoAFP.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Descuento </td>
                                <td>{resultadoDescuentoSalud.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Total </td>
                                <td>{resultadoDescuentoSeguroCesantia.toLocaleString()}</td>
                            </tr>                        
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>

    );

}

export default DemoCalculoRemuneracion;