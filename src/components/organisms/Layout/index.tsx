import { Footer } from "@/components/molecules/Footer";
import { Header, HeaderProps } from "@/components/molecules/Header";
import { Container } from "@mui/material"
import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({
    children,
}:LayoutProps) => {
    
    const navItems:HeaderProps['navItems'] = [
        {
            title: 'About me',
            href: 'about-me'
        },
        {
            title: 'Experience',
            href: 'experience'
        },
        {
            title: 'Projects',
            href: 'projects'
        },
        {
            title: 'Work',
            href: 'work'
        },
        {
            title: 'Contact',
            href: 'contact'
        }
    ];

    return (
        <Container maxWidth='desktop' >
            <Header
                fullname="Matheus Vinícius"
                navItems={navItems}
            />
            <main
                style={{
                    padding: '10px'
                }}
            >
                {children}
            </main>
            <Footer />
        </Container>
    )
}