import React from "react";
import { Table, Button, PageHeader } from "antd";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Styled
import Page from "../components/Page.styled";

// Get accounts hook
import { getAllAccounts } from "../services/accounts.service";

const Home = () => {
    // Create empty array for accounts to be inserted into
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
        <>
            <Helmet>
                <title>Viewing all accounts</title>
            </Helmet>
            <Page>
                <PageHeader
                    ghost={false}
                    title={"Accounts list for Solicy test task."}
                />
                <Table
                    dataSource={accounts}
                    columns={columns}
                    style={{
                        marginTop: "30px",
                    }}
                />
            </Page>
        </>
    );
};

export default Home;
