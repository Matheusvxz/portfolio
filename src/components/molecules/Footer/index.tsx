import { Typography, styled } from "@mui/material"


const StyledFooter = styled('footer')(({theme}) => ({
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: `1px solid ${theme.palette.text.disabled}`
}));

export interface FooterProps {

}


export const Footer = ({

}:FooterProps) => {


    return (
        <StyledFooter>
            <Typography variant="subtitle2">Thanks for visiting.</Typography>
            <Typography variant="subtitle2">Matheus Vinícius</Typography>
        </StyledFooter>
    );
}