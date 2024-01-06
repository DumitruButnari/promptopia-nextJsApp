import "@styles/globals.css";

export const metadata = {
    title: "Promptopia",
    description: "Create & share AI prompts",
    keywords: "prompts, Ai, users",
}

const RootLayout = ({children}) => {
    return (
        <html lang={'en'}>
            <body>
            <div className="main">
                <div class={'gradient'}/>
            </div>

            <main className={'app'}>
                {children}
            </main>
            </body>
        </html>
    );
};

export default RootLayout;