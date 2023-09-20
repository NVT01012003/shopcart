import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
// import { useContext, useEffect } from "react";
// import { instance } from "../../config/axiosConfig";
// import { StoreContext } from "../../context/storeContext";

import "./home.scss";

const Home = () => {
    // const { dispatch } = useContext(StoreContext);

    // useEffect(() => {
    //     return async () => {
    //         try {
    //             const { data } = await instance.get("/api/getAllUser");
    //             dispatch({
    //                 type: "ADD_USERS",
    //                 users: data.element.users,
    //             });
    //             dispatch({
    //                 type: "ADD_PRODUCTS",
    //                 products: data.element.products,
    //             });
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     };
    // }, []);

    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default Home;
