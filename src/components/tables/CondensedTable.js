import React from "react";
import { Card, Table } from "react-bootstrap";

const CondensedTable = () => (
  <Card>
    <Card.Header>
      <Card.Title tag="h5">Condensed Table</Card.Title>
      <h6 className="card-subtitle text-muted">
        Add <code>size="sm"</code> to make tables more compact by cutting cell
        padding in half.
      </h6>
    </Card.Header>
    <Table size="sm" striped>
      <thead>
        <tr>
          <th>Operation System</th>
          <th className="text-end">Users</th>
          <th className="text-end">Share</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Windows</td>
          <td className="text-end">8.232</td>
          <td className="text-end">40%</td>
        </tr>
        <tr>
          <td>Mac OS</td>
          <td className="text-end">3.322</td>
          <td className="text-end">20%</td>
        </tr>
        <tr>
          <td>Linux</td>
          <td className="text-end">4.232</td>
          <td className="text-end">34%</td>
        </tr>
        <tr>
          <td>FreeBSD</td>
          <td className="text-end">1.121</td>
          <td className="text-end">12%</td>
        </tr>
        <tr>
          <td>Chrome OS</td>
          <td className="text-end">1.331</td>
          <td className="text-end">15%</td>
        </tr>
        <tr>
          <td>Android</td>
          <td className="text-end">2.301</td>
          <td className="text-end">20%</td>
        </tr>
        <tr>
          <td>iOS</td>
          <td className="text-end">1.162</td>
          <td className="text-end">14%</td>
        </tr>
        <tr>
          <td>Windows Phone</td>
          <td className="text-end">562</td>
          <td className="text-end">7%</td>
        </tr>
        <tr>
          <td>Other</td>
          <td className="text-end">1.181</td>
          <td className="text-end">14%</td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default CondensedTable;
