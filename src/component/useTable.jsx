import React, { useState } from "react";
import { Table, TableHead, TableRow, TableCell } from '@mui/material';

export default function useTable(records) {
    
    const TblContainer = props => {
        <Table>
            {props.children}
        </Table>
    }
    
    
    return {
        TblContainer,
    }

}