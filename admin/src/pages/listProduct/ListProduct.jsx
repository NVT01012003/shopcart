import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import "./listProduct.scss";

const productColumns = [
    { field: "id", headerName: "ID", width: 180 },
    {
        field: "name",
        headerName: "Name",
        width: 240,
    },
    {
        field: "price",
        headerName: "Price",
        width: 140,
    },
    {
        field: "quantity",
        headerName: "In Stock",
        width: 80,
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
const productRows = [
    {
        id: 1,
        name: "Origin65A keyboard kit",
        price: 15990000,
        quantity: 12,
        status: "active",
    },
    {
        id: 2,
        name: "Origin65A keyboard kit",
        price: 15990000,
        quantity: 12,
        status: "active",
    },
    {
        id: 3,
        name: "Origin65A keyboard kit",
        price: 15990000,
        quantity: 12,
        status: "active",
    },
    {
        id: 4,
        name: "Origin65A keyboard kit",
        price: 15990000,
        quantity: 12,
        status: "passive",
    },
    {
        id: 5,
        name: "Origin65A keyboard kit",
        price: 15990000,
        quantity: 12,
        status: "pending",
    },
    {
        id: 6,
        name: "Origin65A keyboard kit",
        price: 15990000,
        quantity: 12,
        status: "pending",
    },
    {
        id: 7,
        name: "Origin65A keyboard kit",
        price: 15990000,
        quantity: 12,
        status: "passive",
    },
    {
        id: 8,
        name: "Origin65A keyboard kit",
        price: 15990000,
        quantity: 12,
        status: "pending",
    },
    {
        id: 9,
        name: "Origin65A keyboard kit",
        price: 15990000,
        quantity: 12,
        status: "active",
    },
    {
        id: 10,
        name: "Origin65A keyboard kit",
        price: 15990000,
        quantity: 12,
        status: "pending",
    },
];

export const ListProduct = () => {
    return (
        <div className="listProduct">
            <Sidebar />
            <div className="listProductContainer">
                <Navbar />
                <Datatable
                    columns={productColumns}
                    rows={productRows}
                    product={true}
                />
            </div>
        </div>
    );
};
