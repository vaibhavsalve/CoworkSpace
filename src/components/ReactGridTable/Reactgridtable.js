import React, { useState,Component  } from 'react';
import { EditingState } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditColumn
} from '@devexpress/dx-react-grid-bootstrap4';



export default class ReactGridTable extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
        
        columns: [
            { name: 'id', title: 'id' },
            { name: 'name', title: 'name'},
            { name: 'capacity', title: 'capacity'},   
        ],
    };
    
}
 commitChanges = ({ added, changed, deleted }) => {
 // let changedRows;
  if (added) {
    const startingAddedId = this.rows.length > 0 ? this.rows[this.rows.length - 1].id + 1 : 0;
    changedRows = [
      ...this.rows,
      ...added.map((row, index) => ({
        id: startingAddedId + index,
        ...row,
      })),
    ];
  }
  if (changed) {
    changedRows = this.rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
  }
  if (deleted) {
    const deletedSet = new Set(deleted);
    changedRows = this.rows.filter(row => !deletedSet.has(row.id));
  }
  // this.setState({})
};
 
 rows=this.props.data.map((items)=>({id:items.id,name:items.name,capacity:items.capacity}))
  render (){

return (
  <div className="card">
    <Grid
       rows={this.rows}
       columns={this.state.columns}
    >
      <Table />
      <EditingState
         onCommitChanges={this.commitChanges}
        />
        <TableHeaderRow />
        <TableEditColumn
          showAddCommand
          showEditCommand
          showDeleteCommand
        />
    
    </Grid>
  </div>
);

  }




};