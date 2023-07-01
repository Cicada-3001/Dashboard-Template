import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize,  Sort, 
  ContextMenu, Filter, Page, Search, Inject, Toolbar} from "@syncfusion/ej2-react-grids"
import  { employeesData, contextMenuItems, employeesGrid, ordersData } from '../data/dummy'
import {  Header } from '../components'



function Employees() {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        editSettings={editing}
        toolbar={['Search']}
        width="auto"
        
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[ Page, Search, Toolbar ]} />
      </GridComponent>
    </div>
  );
}

export default Employees
