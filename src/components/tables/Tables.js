import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import BasicTable from "./BasicTable";
import StripedRows from "./StripedRows";
import CondensedTable from "./CondensedTable";
import HoverableRows from "./HoverableRows";
import BorderedTable from "./BorderedTable";
import ContextualClasses from "./ContextualClasses";
import ResponsiveTable from "./ResponsiveTable";
import RowSelection from "./RowSelection";
import RowExpanding from "./RowExpanding";
import PaginationPage from "./Pagination";
import ColumnSorting from "./ColumnSorting";
import ColumnFiltering from "./ColumnFiltering";

const Tables = () => (
  <React.Fragment>
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Tables</h1>

      <Row>
        <Col lg="6">
          <BasicTable />
        </Col>
        <Col lg="6">
          <StripedRows />
        </Col>
        <Col lg="6">
          <CondensedTable />
        </Col>
        <Col lg="6">
          <HoverableRows />
        </Col>
        <Col lg="6">
          <BorderedTable />
        </Col>
        <Col lg="6">
          <ContextualClasses />
        </Col>
        <Col lg="12">
          <ResponsiveTable />
        </Col>
      </Row>
      <RowSelection />
      <RowExpanding />
      <PaginationPage />
      <ColumnSorting />
      <ColumnFiltering />
    </Container>
  </React.Fragment>
);

export default Tables;
