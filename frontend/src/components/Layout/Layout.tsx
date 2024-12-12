// import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {children}
            </main>
            {/* <Footer/> */}
        </div>
    );
};