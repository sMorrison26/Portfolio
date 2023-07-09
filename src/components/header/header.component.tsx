// import Head from 'next/head'
// import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'

export default function Header() {
    return(
        <div>
            <div className="row d-flex justify-content-between">
                <div className="col-9">
                    <h2>Sean Morrison</h2>
                </div>
                <div className="col-3 d-flex justify-content-around align-items-center">
                    <p>Projects</p>
                    <p>About</p>
                </div>
            </div>
        </div>

    );

}