import { Button, Grid, Typography, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const UserForms = ({ addUser, updateUsers, submitted, data, isEdit }) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        if(!submitted){
            setId(0);
            setName('');
        }
    }, [submitted]);

    useEffect(() => {
        if(data?.id && data.id !== 0){
            setId(data.id);
            setName(data.name)
        }
    }, [data]);

    return (
        <Grid 
            container
            spacing={2}
            sx={{
                backgroundColor:'#ffffff',
                marginBottom: '30px',
                display: 'block',
            }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{color: '#000000'}}>User Form</Typography>
            </Grid>
            
            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography 
                    component={'label'} 
                    htmlFor="name"
                    sx={{
                        color:'#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Name
                </Typography>
                <input 
                    type="text"
                    id='name'
                    name="name"
                    style={{width: '400px'}}  // Changed sx to style
                    value={name}  // Fixed: was {id}
                    onChange={e => setName(e.target.value)}  // Fixed: was setId
                />
            </Grid>
            
            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography 
                    component={'label'} 
                    htmlFor="id"
                    sx={{
                        color:'#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    ID
                </Typography>
                <input 
                    type="number"
                    id='id'
                    name="id"
                    style={{width: '400px'}}  // Changed sx to style
                    value={id}  // Fixed: was {name}
                    onChange={e => setId(e.target.value)}  // Fixed: was setName
                />
            </Grid>
            
            <Button
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: '#00c6e6',
                    color: '#000000',
                    marginLeft: '15px',
                    marginTop: '20px',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: '#00c6e6',
                    }
                }}
                onClick={() => isEdit? updateUsers({id: id, name: name}) : addUser({id, name})}
            >
                {
                    isEdit ? "Update" : "Add"
                }
            </Button>
        </Grid>
    );
}

export default UserForms;