import React from "react";
import { Card, Table } from "react-bootstrap";

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";

const HoverableRows = () => (
    <Card>
      <Card.Header>
        <Card.Title tag="h5">Hoverable Rows</Card.Title>
        <h6 className="card-subtitle text-muted">
          Add <code>hover</code> to enable a hover state on table rows within a{" "}
          <code>&#x3C;tbody&#x3E;</code>.
        </h6>
      </Card.Header>
      <Table striped hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src={avatar1}
                width="48"
                height="48"
                className="rounded-circle me-2"
                alt="Avatar"
              />{" "}
              Stacie Hall
            </td>
            <td>864-348-0485</td>
            <td>June 21, 1961</td>
          </tr>
          <tr>
            <td>
              <img
                src={avatar2}
                width="48"
                height="48"
                className="rounded-circle me-2"
                alt="Avatar"
              />{" "}
              Chris Wood
            </td>
            <td>914-939-2458</td>
            <td>May 15, 1948</td>
          </tr>
          <tr>
            <td>
              <img
                src={avatar3}
                width="48"
                height="48"
                className="rounded-circle me-2"
                alt="Avatar"
              />{" "}
              Carl Jenkins
            </td>
            <td>704-993-5435</td>
            <td>September 14, 1965</td>
          </tr>
          <tr>
            <td>
              <img
                src={avatar4}
                width="48"
                height="48"
                className="rounded-circle me-2"
                alt="Avatar"
              />{" "}
              Bertha Martin
            </td>
            <td>765-382-8195</td>
            <td>April 2, 1971</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );

export default HoverableRows;
