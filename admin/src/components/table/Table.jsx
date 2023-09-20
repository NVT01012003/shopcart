import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
    const rows = [
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
            status: "pending",
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
        {
            id: 4,
            user_name: "trang nguyen",
            quantity: 1,
            total: 1500000,
            status: "pending",
            payment_method: "Cash on Delivery",
            created_at: "JANUARY 18, 2022",
        },
        {
            id: 5,
            user_name: "Erling Haaland",
            quantity: 2,
            total: 2700000,
            status: "pending",
            payment_method: "Online Payment",
            created_at: "JANUARY 18, 2022",
        },
        {
            id: 6,
            user_name: "Lionel Messi",
            quantity: 45,
            total: 425000,
            status: "complete",
            payment_method: "Online",
            created_at: "JANUARY 18, 2022",
        },
    ];
    return (
        <TableContainer component={Paper} className={`table`}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Customer</TableCell>
                        <TableCell className="tableCell">Quantity</TableCell>
                        <TableCell className="tableCell">Total</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">
                            Payment Method
                        </TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">
                                {row.id}
                            </TableCell>
                            <TableCell className="tableCell">
                                {row.user_name}
                            </TableCell>
                            <TableCell className="tableCell">
                                {row.quantity}
                            </TableCell>
                            <TableCell className="tableCell">
                                {row.total}
                            </TableCell>
                            <TableCell className="tableCell">
                                {row.created_at}
                            </TableCell>
                            <TableCell className="tableCell">
                                {row.payment_method}
                            </TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>
                                    {row.status}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;
