import Link from 'next/link'

export function Footer() {
    return (
        
        <footer className="bg-one">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="footer-logo">
                    <Link href='/'>
                        <a className='navbar-brand'><img src="images/logo/catlogo.png"
                                alt="Logo" style={{width:'150px'}}/></a>
                    </Link><br/>
                        <h6 className="p-color">+998(99)-911-02-04</h6>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12 footer-list">
                    <h4>About Us</h4>
                    <ul>
                        <li><a href="#" className="tran3s">About Singleton</a></li>
                        <li><a href="#" className="tran3s">Jobs</a></li>
                        <li><a href="#" className="tran3s">Team</a></li>
                        <li><a href="#" className="tran3s">Testimonials</a></li>
                        <li><a href="#" className="tran3s">Blog</a></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 footer-subscribe">
                    <h4>Subscribe Us</h4>
                    
                </div>
            </div>

            <div className="bottom-footer clearfix">

                <p className="float-left">&copy; 2021 <a href="#" className="tran3s
                        p-color">Coding Academy in Tashkent</a>.
                </p>
            </div>
        </div> 
    </footer>


       
    )
}
