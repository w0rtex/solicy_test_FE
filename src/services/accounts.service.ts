import { GET } from "../hooks/api.hook";

export const getAllAccounts = async () => {
    // Receive all accounts from the server
    const res = await GET("/accounts/");

    return res.map((item: any) => {
        // Easier to work with
        const date = new Date(item.createdOn);

        return {
            id: item.simpleId,
            owner: item.owner,
            // Format dd/mm/yyyy
            date:
                date.getDate() +
                "/" +
                (date.getMonth() + 1) +
                "/" +
                date.getFullYear(),
            name: item.name,
            _id: item._id,
            key: item.simpleId,
        };
    });
};

export const getAccount = async (id: any) => {
    // Receive account
    const res = await GET("/accounts/" + id);
    console.log(res);

    const date = new Date(res.createdOn);

    return {
        simpleId: res.simpleId,
        owner: res.owner,
        // Format dd/mm/yyyy
        date:
            date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear(),
        name: res.name,
        _id: res._id,
        key: res.simpleId,
    };
};
