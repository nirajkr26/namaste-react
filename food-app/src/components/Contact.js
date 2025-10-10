const Contact = () => {
    return (
        <div>

            <h1 className="text-2xl font-bold">Contact</h1>

            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name" />
                <input type="text" className="border border-black p-2 m-2" placeholder="message" />
                <button className="bg-gray-200 rounded-lg">Submit</button>
            </form>
        </div>
    )

}

export default Contact;