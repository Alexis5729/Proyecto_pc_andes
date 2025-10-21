import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

function DemoCalculoRemuneracion() {
    const [precioCPU, setPrecioCPU] = useState(0);
    const [precioGPU, setPrecioGPU] = useState(0);
    const [cantidadRAM, setCantidadRAM] = useState(0);
    const [conGarantia, setConGarantia] = useState("0");
    const [descuento, setDescuento] = useState(0);

    // porcentajes
    const iva = 0.19;

    // Convertir valores a números
    const resultadoPrecioCPU = Number(precioCPU);
    const resultadoPrecioGPU = Number(precioGPU);
    const resultadoCantidadRam = Number(cantidadRAM);
    const resultadoDescuento = Number(descuento);
    const siGarantia = conGarantia === "1" ? 15000 : 0;
    const resultadoCantidadRAM = resultadoCantidadRam * 30000;

    // Calculo subtotal
    const subTotal = resultadoPrecioCPU + resultadoPrecioGPU + resultadoCantidadRAM + siGarantia;

    // Calculo total con IVA y descuento (aplicando el descuento sobre el subtotal + IVA)
    const totalConIva = subTotal * (1 + iva);
    const total = totalConIva - resultadoDescuento;

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
                        <label className='form-label' htmlFor='precioCPU'>Precio CPU</label>
                        <input
                            className='form-control'
                            id='precioCPU'
                            name='precioCPU'
                            placeholder='1000000'
                            value={precioCPU}
                            onChange={(e) => setPrecioCPU(e.target.value)}
                            type="number"
                            min="0"
                        />
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='precioGPU'>Precio GPU (por módulo)</label>
                        <input
                            className='form-control'
                            id='precioGPU'
                            name='precioGPU'
                            placeholder='1000000'
                            value={precioGPU}
                            onChange={(e) => setPrecioGPU(e.target.value)}
                            type="number"
                            min="0"
                        />
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='cantidadRAM'>Cantidad módulos RAM</label>
                        <input
                            className='form-control'
                            id='cantidadRAM'
                            name='cantidadRAM'
                            placeholder='Cantidad'
                            value={cantidadRAM}
                            onChange={(e) => setCantidadRAM(e.target.value)}
                            type="number"
                            min="0"
                        />
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='conGarantia'>Garantía</label>
                        <select
                            className='form-select'
                            id="conGarantia"
                            name='conGarantia'
                            value={conGarantia}
                            onChange={(e) => setConGarantia(e.target.value)}
                        >
                            <option value="0">Seleccionar Garantía</option>
                            <option value="1">Con Garantía</option>
                            <option value="2">Sin Garantía</option>
                        </select>
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='descuento'>Descuento</label>
                        <input
                            className='form-control'
                            id='descuento'
                            name='descuento'
                            placeholder='0'
                            value={descuento}
                            onChange={(e) => setDescuento(e.target.value)}
                            type="number"
                            min="0"
                        />
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
                                <td>SubTotal</td>
                                <td>{subTotal.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>IVA (19%)</td>
                                <td>{(subTotal * iva).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Descuento</td>
                                <td>{resultadoDescuento.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Total</td>
                                <td>{total.toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default DemoCalculoRemuneracion;