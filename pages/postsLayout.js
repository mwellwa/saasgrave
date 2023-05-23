function PostLayout({name, bio, birth, death, deathCause}) {

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
        <div  className="bg-stone-950 h-max w-max z-10">
            <div className="h-max w-96 p-4 bg-gradient-to-r from-teal-900 via-black to-gray-900
            rounded-2xl items-center">
               {/*<div className='pt-4 '>
                    <img class="rounded-2xl "
                        src={'https://oaidalleapiprodscus.blob.core.windows.net/private/org-JiHD8j3gP7z0GXJZcCiSGT1H/user-pOfr53Iyi0SVMf5gmIoYR6k6/img-aeVkaSlw4071dUIgla9a7JxJ.png?st=2023-05-17T18%3A44%3A27Z&se=2023-05-17T20%3A44%3A27Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-05-17T19%3A22%3A19Z&ske=2023-05-18T19%3A22%3A19Z&sks=b&skv=2021-08-06&sig=K2w8RI5Bo/1akPRU9%2BgYsjhQ1Q7%2BF49LyP%2BKAf/y2x0%3D'} 
                    />
                </div>*/}
                <div className="bg-black opacity-70 rounded-2xl text-white pb-1 pr-1">
                    <h1 className="ml-2 font-bold font-serif text-center">In memory of {name}</h1>
                    <p className='ml-2 font-bold text-red-700 text-center font-serif'>{birth_month_name} {birth_day}, {birth_year} - {death_month_name} {death_day}, {death_year}</p>
                    <p className="ml-2 text-xl font-serif">{bio}</p>
                    <p className='ml-2 font-bold text-red-700 text-center font-serif'>Cause of Death</p>
                    <p className="ml-2 text-xl font-serif">{deathCause}</p>
                </div>
            </div>
        </div>
    )
}

export default PostLayout;