import { Box } from "@mui/material";
import UserForms from "./UserForms";
import UsersTable from "./UsersTable";
const users = [
    {
        id: 1,
        name: 'Malith',
    },
    {
        id: 2,
        name: 'Senad',
    }
];

const Users= () => {
    return(
        <Box
            sx={{
                width: 'calc(100% - 100px)',
                margin: 'auto',
                marginTop: '100px',
            }}
        >
            <UserForms />
            <UsersTable rows={users} />
        </Box>
    );
}

export default Users;