import React, { Fragment, useCallback, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Btn, H4,Image,Badges } from '../../../../AbstractElements';
import { dummytabledata, tableColumns } from '../../../../Data/Table/Defaultdata';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Media } from 'reactstrap';
import user1 from '../../../../assets/images/user/1.jpg';
import { toast } from 'react-toastify';

const DataTableComponent = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleDelet, setToggleDelet] = useState(false);
    const [data, setData] = useState(dummytabledata);
    const [mockDataTeam, setmockDataTeam] = React.useState([]);

    const handleRowSelected = useCallback(state => {
        setSelectedRows(state.selectedRows);
        console.log('state.selectedRows',state.selectedRows)
    }, []);

    const DeleteRow = (id) => {
        console.log('selectedRows',id)
        axios.delete(`${process.env.REACT_APP_NODE_BACKEND_URL}/api/venues/delete/${id}`).then((response) => {
            console.log('response',response)
            toast.success(response.data);
          });
    };


    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_NODE_BACKEND_URL}/api/venues/findall`).then((response) => {
          setmockDataTeam(Object.values(response.data));
        });
      }, [mockDataTeam]);

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.title)}?`)) {
            setToggleDelet(!toggleDelet);
            setData(data.filter((item) => selectedRows.filter((elem) => elem.id === item.id).length > 0 ? false : true));
            setSelectedRows('');
        }
    };
   const tableColumns = [
        {
         name: 'Vendor ID',
         selector: row =>  <span className='badge badge-light-info'>EWV{row.id}</span>,
         sortable: true,
         center: true,
        },
        {
            name: 'Name',
            selector: row => <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${JSON.parse(row.gallery)[0]}`, alt: `${row.name}` }} />
                        <Media body className="align-self-center">
                             <div className='text-capitalize'>{row.name}</div>
                        </Media>
                     </Media>,
            sortable: true,
            center: false,
        },
        {
            name: 'Business Name',
            selector: row => <span className='text-capitalize'>{row.business_name}</span>,
            sortable: true,
            center: true,
        },
        {
            name: 'Mobile No.',
            selector: row => `${row.number}`,
            sortable: true,
            center: true,
        },
        {
            name: 'Email',
            selector: row => `${row.email}`,
            sortable: true,
            center: true,
        },
        {
            name: 'Budget',
            selector: row => <span className="f-w-700 font-success"><i className="icofont icofont-arrow-up"></i> ₹{row.wedding_price_veg}</span>,
            sortable: true,
            center: true,
        },
        {
            name: 'Active',
            selector: row => <span className='badge badge-light-primary text-uppercase'>{row.isActive}</span>,
            sortable: true,
            center: true,
        },
        {
            name: 'Actions',
            selector: row => <div className="d-flex">
                <Link to={`/venues/profile/${row.id}/`} title='Edit'><Badges attrBadge={{ color: 'primary' }} >Edit</Badges></Link>&nbsp;
                <Badges attrBadge={{ color: 'secondary', onClick: () => DeleteRow(row.id) }}>Delete</Badges>
            </div>,
            sortable: true,
            center: true,
        }
    ];
    

    return (
        <Fragment>
            {(selectedRows.length !== 0) &&
                <div className={`d-flex align-items-center justify-content-between bg-light-info p-2`}>
                    <H4 attrH4={{ className: 'text-muted m-0' }}>Delet Selected Data..!</H4>
                    <Btn attrBtn={{ color: 'danger', onClick: () => handleDelete() }}>Delete</Btn>
                </div>
            }
            <DataTable
                data={mockDataTeam}
                columns={tableColumns}
                striped={true}
                center={true}
                pagination
                selectableRows
                onSelectedRowsChange={handleRowSelected}
                clearSelectedRows={toggleDelet}
            />
        </Fragment>
    )
}
export default DataTableComponent