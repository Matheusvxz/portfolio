import { AppBar, Box, Button, Dialog, DialogTitle, IconButton, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Ball } from "@/components/Ball";


export const Home = () => {

    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        alert("Você clicou")
    }

    return (
        <>
            <Head>
                <title>Hello world</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Box
                    sx={{flexGrow: 1}}
                >
                    <AppBar
                        position="static"
                        sx={{
                            backgroundColor: "#c4e456"
                        }}
                    >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button
                            onClick={() => setOpen(true)}
                        color="inherit">Login</Button>
                        </Toolbar>    
                    </AppBar>
                </Box>

                <Ball
                    color="#00F"
                >ds</Ball>

                <Dialog
                    open={open}
                    // onClose={() => setOpen(false)}
                    disableEscapeKeyDown
                >
                    <DialogTitle>Dialog</DialogTitle>
                    <Button
                        onClick={() => setOpen(false)}
                    >EXIT</Button>
                </Dialog>
            </main>
        </>
    )
}

export default Home;