import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";

const userColumns = [
    { field: "id", headerName: "ID", width: 180 },
    {
        field: "first_name",
        headerName: "First name",
        width: 140,
    },
    {
        field: "last_name",
        headerName: "Last name",
        width: 140,
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },

    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

//temporary data
const userRows = [
    {
        id: 1,
        first_name: "Snow",
        last_name: "David",
        status: "active",
        email: "1snow@gmail.com",
    },
    {
        id: 2,
        first_name: "Snow",
        last_name: "David",
        email: "2snow@gmail.com",
        status: "passive",
    },
    {
        id: 3,
        first_name: "Snow",
        last_name: "David",
        email: "3snow@gmail.com",
        status: "pending",
    },
    {
        id: 4,
        first_name: "Snow",
        last_name: "David",
        email: "4snow@gmail.com",
        status: "active",
    },
    {
        id: 5,
        first_name: "Snow",
        last_name: "David",
        email: "5snow@gmail.com",
        status: "passive",
    },
    {
        id: 6,
        first_name: "Snow",
        last_name: "David",
        email: "6snow@gmail.com",
        status: "active",
    },
    {
        id: 7,
        first_name: "Snow",
        last_name: "David",
        email: "7snow@gmail.com",
        status: "passive",
    },
    {
        id: 8,
        first_name: "Snow",
        last_name: "David",
        email: "8snow@gmail.com",
        status: "active",
    },
    {
        id: 9,
        first_name: "Snow",
        last_name: "David",
        email: "snow@gmail.com",
        status: "pending",
    },
    {
        id: 10,
        first_name: "Snow",
        last_name: "David",
        email: "snow@gmail.com",
        status: "active",
    },
];

const List = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datatable rows={userRows} columns={userColumns} />
            </div>
        </div>
    );
};

export default List;
