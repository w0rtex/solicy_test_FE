import React from "react";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";

// Styled
import Page from "../components/Page.styled";

// Accounts
import { getAllAccounts } from "../services/accounts.service";

const Home = () => {
    const [accounts, setAccounts] = React.useState([]);

    React.useEffect(() => {
        getAllAccounts().then((accounts: any) => {
            setAccounts(accounts);
        });
    }, []);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Date added",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Owner",
            dataIndex: "owner",
            key: "owner",
        },
        {
            title: "Actions",
            key: "action",
            render: (_: any, record: any) => (
                <Link to={"/accounts/" + record.id}>
                    <Button type="primary">View</Button>
                </Link>
            ),
        },
    ];

    return (
        <Page>
            <Table dataSource={accounts} columns={columns} />
        </Page>
    );
};

export default Home;
