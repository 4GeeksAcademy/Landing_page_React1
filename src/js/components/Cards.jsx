export default function Cards(props) {
    return (
        <div className="">

            <div className="card m-3 col-12 col-sm-6 col-lg-4" style={{ width: "18rem" }}>
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <hr />
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>



        </div>
    )
}