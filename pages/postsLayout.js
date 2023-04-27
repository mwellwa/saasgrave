import img from './img.png'; 

function PostLayout({name, bio, birth, death, url}) {

    const birth_date = new Date(birth);
    const birth_day = birth_date.getDay();
    const birth_month_number = birth_date.getMonth();
    //convert birth month number to a name
    const monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"];
    const birth_month_name = monthNames[birth_month_number];
    const birth_year = birth_date.getFullYear();

    const death_date = new Date(death);
    const death_day = death_date.getDay();
    const death_month_number = death_date.getMonth();
    //convert death month number to a name
    const death_month_name = monthNames[death_month_number];
    const death_year = death_date.getFullYear();
    

    return (
        <div  className="bg-stone-950 h-fit w-fit">
            <div className="h-96 w-96 pl-4 ml-2 mb-2 mr-2 pr-4 bg-gradient-to-r from-teal-900 via-black to-gray-900
            rounded-2xl">
                <div className='pt-4'>
                    <img class="rounded-2xl"
                        src={'https://images.unsplash.com/photo-1553610074-8c838fa2e56e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80'} 
                    />
                </div>
                <div className="bg-black opacity-70 rounded-2xl text-white mt-3 pb-1">
                    <h1 className="ml-2 font-bold font-serif text-center">In memory of {name}</h1>
                    <p className='ml-2 text-sm text-red-700 text-center font-serif'>{birth_month_name} {birth_day}, {birth_year} - {death_month_name} {death_day}, {death_year}</p>
                    <p className="ml-2 text-sm font-serif">{bio}</p>
                </div>
            </div>
        </div>
    )
}

export default PostLayout;