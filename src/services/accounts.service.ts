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

    // Easier to work with
    const date = new Date(res.createdOn);
    const formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    // Easier to work with
    const updatedDate = res.updatedOn ? new Date(res.updatedOn) : null;
    // Format dd/mm/yyyy if the account was ever updated
    const formattedUpdatedDate = updatedDate
        ? updatedDate.getDate() +
          "/" +
          (updatedDate.getMonth() + 1) +
          "/" +
          updatedDate.getFullYear()
        : null;

    return {
        simpleId: res.simpleId,
        owner: res.owner,
        // Format dd/mm/yyyy
        date: formattedDate,
        // Format Update date
        updatedOn: formattedUpdatedDate,
        name: res.name,
        _id: res._id,
        key: res.simpleId,
    };
};
