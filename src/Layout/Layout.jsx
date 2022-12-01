import '../assets/Style/layout.css'

function Layout({children}) {
    return ( 
        <>
            <div className='conteiner-body'>
                <div className='login-divs'>
                    {children}
                </div>
            </div>
        </>
     );
}

export default Layout;