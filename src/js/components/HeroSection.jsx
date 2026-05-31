export default function HeroSection() {
    return (
        <div className="container bg-body-secondary rounded pt-5 pb-5 mt-5 mx-auto" 
        // style={{ maxWidth: "88.5%" }}
        >
            <div className=" text-start m-3 p-3">
                <h1 className="bg-opacity-50 display-1">A Warm Welcome!</h1>
                <p className="bg-opacity-50 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <a href="#" className="btn btn-primary">A Call to Action</a>
            </div>
        </div>
    )
}