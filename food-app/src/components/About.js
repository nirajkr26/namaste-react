import User from "./User";

const About = () => {
    return (
        <div className="">
            <p className="flex justify-center m-5 text-2xl font-bold">About Us</p>
            <User name={"Niraj Shah"} location={"Patna"} />
        </div>
    )
}

export default About;