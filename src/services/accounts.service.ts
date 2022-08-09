import { GET } from "../hooks/api.hook";

export const getAllAccounts = async () => {
    const res = await GET("/")

    return res.map((item: any) => {
        return {
            id: item.simpleId,
            owner: item.owner,
            date: item.date,
            name: item.name
        }
    });
}