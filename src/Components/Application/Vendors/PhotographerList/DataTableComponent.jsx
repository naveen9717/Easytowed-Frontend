import React, { Fragment, useCallback, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Btn, H4,Image,Badges } from '../../../../AbstractElements';
import { dummytabledata, tableColumns } from '../../../../Data/Table/Defaultdata';
import axios from "axios";
import { Media } from 'reactstrap';
import user1 from '../../../../assets/images/user/1.jpg';
import { Mail, DollarSign, Headphones, Link, GitHub, Award, Activity, Heart } from 'react-feather';
import { toast } from 'react-toastify';

const DataTableComponent = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleDelet, setToggleDelet] = useState(false);
    const [data, setData] = useState(dummytabledata);
    const [mockDataTeam, setmockDataTeam] = React.useState([]);

    const handleRowSelected = useCallback(state => {
        setSelectedRows(state.selectedRows);
    }, []);

    const DeleteRow = (id) => {
        console.log('selectedRows',id)
        axios.delete(`${process.env.REACT_APP_NODE_BACKEND_URL}/api/photographers/delete/${id}`).then((response) => {
            console.log('response',response)
            toast.success(response.data);
          });
    };

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_NODE_BACKEND_URL}/api/photographers/findall`).then((response) => {
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
            name: 'Name',
            selector: row => <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${JSON.parse(row.gallery)}`, alt: `${row.name}` }} />
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
            name: 'Address',
            selector: row => <span className='text-capitalize'>{row.address}</span>,
            sortable: true,
            center: true,
        },
        {
            name: 'Budget',
            selector: row => <span className="f-w-700 font-success"><i className="icofont icofont-arrow-up"></i> ₹{row.price}</span>,
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
                <a href={`/vendors/profile/${row.id}/`} title='Edit'><Badges attrBadge={{ color: 'primary' }} >Edit</Badges></a>&nbsp;
                <Badges attrBadge={{ color: 'secondary', onClick: () => DeleteRow(row.id) }}>Delete</Badges>
            </div>,
            sortable: true,
            center: true,
        }
    ];
    
    // const dummytabledata = [
    //     {
    //         id: 1,
    //         name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user1}`, alt: 'Generic placeholder image' }} />
    //             <Media body className="align-self-center">
    //                 <div>Airi Satou</div>
    //             </Media>
    //         </Media>,
    //         date: '2023/04/27',
    //         invoice: '#PX0101',
    //         designation: 'System Architect',
    //         credit: <span className="f-w-700 font-success"><i className="icofont icofont-arrow-up"></i> 4.3%</span>,
    //         company: 'Hewlett packard',
    //         priority: <span className='badge badge-light-primary'>High</span>,
    //         budget: '$3142.00',
    
    //     },
    //     {
    //         id: 2,
    //         name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user2}`, alt: 'Generic placeholder image' }} />
    //             <Media body className="align-self-center">
    //                 <div>Thomas Taylor</div>
    //             </Media>
    //         </Media>,
    //         date: '2023/04/22',
    //         invoice: '#RF304f',
    //         designation: 'Maintenace service',
    //         credit: <span className="f-w-700 font-success"><i className="icofont icofont-arrow-up"></i> 5.6%</span>,
    //         company: 'Apple Inc.',
    //         priority: <span className='badge badge-light-danger'>Urgent</span>,
    //         budget: '$1234.00',
    
    //     },
    //     {
    //         id: 3,
    //         name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user3}`, alt: 'Generic placeholder image' }} />
    //             <Media body className="align-self-center">
    //                 <div>Michael Morris</div>
    //             </Media>
    //         </Media>,
    //         date: '2023/05/21',
    //         invoice: '#DNJ480',
    //         designation: 'Junior Technical Author	',
    //         credit: <span className="f-w-700 font-danger"><i className="icofont icofont-arrow-down"></i> 2.4%</span>,
    //         company: 'Edinburgh',
    //         priority: <span className='badge badge-light-success'>Low</span>,
    //         budget: '$2345.00',
    
    //     },
    //     {
    //         id: 4,
    //         name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user4}`, alt: 'Generic placeholder image' }} />
    //             <Media body className="align-self-center">
    //                 <div>Tiger Nixon</div>
    //             </Media>
    //         </Media>,
    //         date: '2023/03/09',
    //         invoice: '#G189d0',
    //         designation: 'Senior Javascript Developer',
    //         credit: <span className="f-w-700 font-danger"><i className="icofont icofont-arrow-down"></i> 2.2%</span>,
    //         company: 'Microsoft',
    //         priority: <span className='badge badge-light-info'>Medium</span>,
    //         budget: '$7689.00',
    
    //     },
    //     {
    //         id: 5,
    //         name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user5}`, alt: 'Generic placeholder image' }} />
    //             <Media body className="align-self-center">
    //                 <div>Garrett Winters</div>
    //             </Media>
    //         </Media>,
    //         date: '2023/04/10',
    //         invoice: '#31D8FFS',
    //         designation: 'Accountant',
    //         credit: <span className="f-w-700 font-success"><i className="icofont icofont-arrow-up"></i> 5.8%</span>,
    //         company: 'Tata Co.',
    //         priority: <span className='badge badge-light-primary'>High</span>,
    //         budget: '$2145.00',
    
    //     },
    //     {
    //         id: 6,
    //         name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user6}`, alt: 'Generic placeholder image' }} />
    //             <Media body className="align-self-center">
    //                 <div>Carolyn Jones</div>
    //             </Media>
    //         </Media>,
    //         date: '2023/06/12',
    //         invoice: '#G189D4',
    //         designation: 'General service',
    //         credit: <span className="f-w-700 font-success"><i className="icofont icofont-arrow-up"></i> 6.4%</span>,
    //         company: 'Google Inc.',
    //         priority: <span className='badge badge-light-danger'>Urgent</span>,
    //         budget: '$2578.00',
    
    //     },
    //     {
    //         id: 7,
    //         name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user7}`, alt: 'Generic placeholder image' }} />
    //             <Media body className="align-self-center">
    //                 <div>Glen Matney</div>
    //             </Media>
    //         </Media>,
    //         date: '2023/04/25',
    //         invoice: '#PX2101',
    //         designation: 'System Architect',
    //         credit: <span className="f-w-700 font-danger"><i className="icofont icofont-arrow-down"></i> 0.3%</span>,
    //         company: 'Mindtree Ltd.',
    //         priority: <span className='badge badge-light-success'>Low</span>,
    //         budget: '$6538.00',
    
    //     },
    //     {
    //         id: 8,
    //         name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user8}`, alt: 'Generic placeholder image' }} />
    //             <Media body className="align-self-center">
    //                 <div>Ashton Cox</div>
    //             </Media>
    //         </Media>,
    //         date: '2023/06/09',
    //         invoice: '#px0101',
    //         designation: 'System Architect',
    //         credit: <span className="f-w-700 font-success"><i className="icofont icofont-arrow-up"></i> 7.3%</span>,
    //         company: 'Wipro Ltd.',
    //         priority: <span className='badge badge-light-danger'>Urgent</span>,
    //         budget: '$2121.00',
    
    //     },
    //     {
    //         id: 9,
    //         name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user9}`, alt: 'Generic placeholder image' }} />
    //             <Media body className="align-self-center">
    //                 <div>Tiger Nixon</div>
    //             </Media>
    //         </Media>,
    //         date: '2023/01/11',
    //         invoice: '#G5384H',
    //         designation: 'General service',
    //         credit: <span className="f-w-700 font-success"><i className="icofont icofont-arrow-up"></i> 6.3%</span>,
    //         company: 'Edinburgh',
    //         priority: <span className='badge badge-light-primary'>High</span>,
    //         budget: '$9546.00',
    
    //     },
    //     {
    //         id: 10,
    //         name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user10}`, alt: 'Generic placeholder image' }} />
    //             <Media body className="align-self-center">
    //                 <div>Brielle Williamson</div>
    //             </Media>
    //         </Media>,
    //         date: '2023/04/02',
    //         invoice: '#E5384H',
    //         designation: 'System Architect',
    //         credit: <span className="f-w-700 font-danger"><i className="icofont icofont-arrow-down"></i> 3.3%</span>,
    //         company: 'Mphasis Ltd',
    //         priority: <span className='badge badge-light-info'>Medium</span>,
    //         budget: '$4587.00',
    
    //     },
    //     {
    //         id: 11,
    //         name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user11}`, alt: 'Generic placeholder image' }} />
    //             <Media body className="align-self-center">
    //                 <div>Charles Kubik</div>
    //             </Media>
    //         </Media>,
    //         date: '2023/05/01',
    //         invoice: '#JK384H',
    //         designation: 'System Architect',
    //         credit: <span className="f-w-700 font-danger"><i className="icofont icofont-arrow-down"></i> 2.3%</span>,
    //         company: 'Infosys Ltd.',
    //         priority: <span className='badge badge-light-success'>Low</span>,
    //         budget: '$3140.00',
    
    //     },
    //     {
    //         id: 12,
    //         name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user12}`, alt: 'Generic placeholder image' }} />
    //             <Media body className="align-self-center">
    //                 <div>Brielle Williamson</div>
    //             </Media>
    //         </Media>,
    //         date: '2023/07/04',
    //         invoice: '#HY5384H',
    //         designation: 'General service',
    //         credit: <span className="f-w-700 font-danger"><i className="icofont icofont-arrow-down"></i> 1.3%</span>,
    //         company: 'Edinburgh',
    //         priority: <span className='badge badge-light-success'>Low</span>,
    //         budget: '$3014.00',
    
    //     },
    //     {
    //         id: 13,
    //         name: <Media className='d-flex'><Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user13}`, alt: 'Generic placeholder image' }} />
    //             <Media body className="align-self-center">
    //                 <div>Kevin Dawson</div>
    //             </Media>
    //         </Media>,
    //         date: '2022/04/06',
    //         invoice: '#KH384H',
    //         designation: 'System Architect',
    //         credit: <span className="f-w-700 font-success"><i className="icofont icofont-arrow-up"></i> 5.3%</span>,
    //         company: 'Infosys.',
    //         priority: <span className='badge badge-light-danger'>Urgent</span>,
    //         budget: '$2014.00',
    
    //     }
    // ];
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