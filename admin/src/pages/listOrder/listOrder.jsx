import "./listOrder.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";

const orderColumns = [
    { field: "id", headerName: "Tracking ID", width: 180 },
    {
        field: "user_name",
        headerName: "Customer",
        width: 180,
    },
    {
        field: "quantity",
        headerName: "Quantity",
        width: 80,
    },
    {
        field: "total",
        headerName: "Total",
        width: 140,
    },
    {
        field: "created_at",
        headerName: "Date",
        width: 160,
    },
    {
        field: "payment_method",
        headerName: "Payment Method",
        width: 140,
    },
    {
        field: "status",
        headerName: "Status",
        width: 120,
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
const orderRows = [
    {
        id: 1,
        user_name: "trang nguyen",
        quantity: 1,
        total: 1500000,
        status: "pending",
        payment_method: "Cash on Delivery",
        created_at: "JANUARY 18, 2022",
    },
    {
        id: 2,
        user_name: "Erling Haaland",
        quantity: 2,
        total: 2700000,
        status: "approved",
        payment_method: "Online Payment",
        created_at: "JANUARY 18, 2022",
    },
    {
        id: 3,
        user_name: "Lionel Messi",
        quantity: 45,
        total: 425000,
        status: "complete",
        payment_method: "Online",
        created_at: "JANUARY 18, 2022",
    },
];

const ListOrder = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datatable
                    rows={orderRows}
                    columns={orderColumns}
                    to="orders"
                />
            </div>
        </div>
    );
};

export default ListOrder;
