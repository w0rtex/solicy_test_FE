import React, { useEffect, useState } from "react";
import { Button, Descriptions, PageHeader } from "antd";
import Helmet from "react-helmet";

import { AccountInterface } from "../models/accounts.model";

// Styles
import Page from "../components/Page.styled";
import { Link, useParams } from "react-router-dom";

// API functions
import { getAccount } from "../services/accounts.service";

const Account = (props: any) => {
    // Get ID from url
    const id = useParams().id;
    // Create empty account
    const [account, setAccount] = useState({} as AccountInterface);

    // Check if id is empty
    if (id === undefined) {
        // Redirect to home page
        props.history.push("/");
    }

    useEffect(() => {
        getAccount(id).then((account: any) => {
            setAccount(account);
        });
    }, [id]);

    return (
        <>
            <Helmet>
                <title>Viewing a single account</title>
            </Helmet>
            <Page>
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title={"Account #: " + account.simpleId}
                    extra={
                        <Link to="/">
                            <Button type="primary">Main page</Button>,
                        </Link>
                    }
                />
                <Descriptions
                    bordered
                    layout="horizontal"
                    style={{
                        marginTop: "30px",
                    }}
                >
                    <Descriptions.Item label="ID" span={3}>
                        {account.simpleId}
                    </Descriptions.Item>
                    <Descriptions.Item label="Name" span={3}>
                        {account.name}
                    </Descriptions.Item>
                    <Descriptions.Item label="Created on" span={3}>
                        {account.date}
                    </Descriptions.Item>
                    <Descriptions.Item label="Updated On" span={3}>
                        {account.updatedOn || "Wasn't updated yet"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Owner" span={3}>
                        {account.owner}
                    </Descriptions.Item>
                </Descriptions>
            </Page>
        </>
    );
};

export default Account;
