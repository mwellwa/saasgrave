function PostLayout({name, bio, birth, death}) {
    

    return (
        <div  className="bg-black h-fit w-fit">
            <div className="h-fit w-fit pl-3 ml-2 mb-2 mr-2 pr-3 bg-gradient-to-r from-teal-900 via-black to-gray-900
            rounded-2xl">
                <div className="bg-trasparent
                text-white mt-1 pb-1">
                    <h1 className="ml-1 text-sm font-bold">{name}</h1>
                    <p className="ml-1 text-xs">{bio}</p>
                </div>
                <img class="rounded-2xl"
                    src={url} />
                <div className="bg-tansparent text-white ">
                    <div className='h-9 w-13 mt-2'>
                        <a href={"https://wa.me/"+ number}className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 rounded-full text-xs">
                            WhatsApp Us
                        </a>     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostLayout;