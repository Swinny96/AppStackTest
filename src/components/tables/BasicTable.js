import React from "react";
import { Card, Table } from "react-bootstrap";

import { FiEdit2, FiTrash } from "react-icons/fi";

const BasicTable = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Basic Table</Card.Title>
      <h6 className="card-subtitle text-muted">
        Using the most basic table markup, here’s how .table-based tables look
        in Bootstrap.
      </h6>
    </Card.Header>
    <Table>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Name</th>
          <th style={{ width: "25%" }}>Phone Number</th>
          <th className="d-none d-md-table-cell" style={{ width: "25%" }}>
            Date of Birth
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ashley Briggs</td>
          <td>864-348-0485</td>
          <td className="d-none d-md-table-cell">June 21, 1961</td>
          <td className="table-action">
            <FiEdit2 className="align-middle me-1" size={18} />
            <FiTrash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Carl Jenkins</td>
          <td>914-939-2458</td>
          <td className="d-none d-md-table-cell">May 15, 1948</td>
          <td className="table-action">
            <FiEdit2 className="align-middle me-1" size={18} />
            <FiTrash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Bertha Martin</td>
          <td>704-993-5435</td>
          <td className="d-none d-md-table-cell">September 14, 1965</td>
          <td className="table-action">
            <FiEdit2 className="align-middle me-1" size={18} />
            <FiTrash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Stacie Hall</td>
          <td>765-382-8195</td>
          <td className="d-none d-md-table-cell">April 2, 1971</td>
          <td className="table-action">
            <FiEdit2 className="align-middle me-1" size={18} />
            <FiTrash className="align-middle" size={18} />
          </td>
        </tr>
        <tr>
          <td>Amanda Jones</td>
          <td>202-672-1407</td>
          <td className="d-none d-md-table-cell">October 12, 1966</td>
          <td className="table-action">
            <FiEdit2 className="align-middle me-1" size={18} />
            <FiTrash className="align-middle" size={18} />
          </td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default BasicTable;