import React, { useState, useEffect } from "react";
import batImg from "../assets/batImg2.jpg";
import dcMoonImg from "../assets/editedDcMoonIcon.png";
import dcDndImg from "../assets/discordDnd.png";
import dcOfflineImg from "../assets/dcOfflineImg.png";
import dcOnline from "../assets/dcOnline.png";
import statusImg from "../assets/newStatus.png";

// interface T {
//     Array:Object
// }

interface Resp {
    discord_status: "online" | "dnd" | "idle" | "offline";
    username: string;
    discriminator: string;
    discord_user: {
        username: string;
        discriminator: string;
        avatar: string;
        id: string;
    };
    activities: Array<Object>;
    spotify: {
        track_id: string;
        song: string;
        artist: string;
        album_art: string;
    };
}

const Profile: React.FC = () => {
    const [data, setData] = useState<Resp>();
    const [loading, setLoading] = useState<Boolean>(true);
    const [currTime, setCurrTime] = useState<string>('');
    const [currDate, setCurrDate] = useState<string>('');

    setInterval(async () => {
        setCurrTime(new Date().toLocaleTimeString());
        setCurrDate(new Date().toLocaleDateString());
    }, 1000)


    useEffect(() => {
        const ID = "839902675435782215";
        fetch(`https://api.lanyard.rest/v1/users/${ID}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.data);
                setLoading(false);
                // console.log(res);
                // console.log(res.data);
                console.log(data);
            });
        // eslint-disable-next-line
    }, []);
    // console.log(data);

    return (
        <div id="home" className="mx-5 pt-28 flex flex-col-reverse justify-between items-center sm:mx-20 md:mx-32 lg:flex-row lg:pt-40 ">
            <div className="profile pb-0 py-16 lg:py-5">
                <h1 className="text-3xl text-white text-center font-Ubuntu capitalize sm:text-left sm:text-5xl">hello i'm Salub</h1>
                {/* <small className=" absolute top-62 left-30 text-5xl text-yellow-500 font-Alumni">Air</small> */}
                <p className="text-white px-0.5 text-center font-Roboto text-xl sm:text-left sm:text-3xl" aria-label="I'm a developer">
                    I'm a&nbsp;<span className="typewriter text-xl text-sky-600 sm:text-3xl"></span>
                </p>
                {!loading && (
                    <div className="flex items-center font-Ubuntu text-white my-10 bg-[#24242b] rounded-lg p-2 text-xl sm:items-start lg:text-3xl">
                        <img className="w-20 rounded-full sm:w-28 md:w-28 lg:w-32"
                            src={`https://cdn.discordapp.com/avatars/${data?.discord_user.id}/${data?.discord_user.avatar}.png`}
                            alt="" />
                        {
                            <>
                                {data?.discord_status === "idle" && (
                                    <img
                                        className="w-7 h-7 rounded-full relative top-5 right-6 border-black border-4 sm:right-6 sm:top-16  md:top-20 md:right-8  xl:right-6"
                                        src={dcMoonImg}
                                        alt=""
                                    />
                                )}
                                {data?.discord_status === "dnd" && (
                                    <img
                                        className="w-7 h-7 rounded-full relative top-5 right-6 border-black border-4 sm:right-6 sm:top-16  md:top-20 md:right-8  xl:right-6"
                                        src={dcDndImg}
                                        alt=""
                                    />
                                )}
                                {data?.discord_status === "online" && (
                                    <img
                                        className="w-7 h-7 rounded-full relative top-5 right-6 border-black border-4 sm:right-6 sm:top-16 md:top-20 md:right-8 xl:right-6"
                                        src={dcOnline}
                                        alt=""
                                    />
                                )}
                                {data?.discord_status === "offline" && (
                                    <img
                                        className="w-7 h-7 rounded-full relative top-5 right-6 border-black border-2 sm:right-6 sm:top-16  md:top-20 md:right-8  xl:right-6"
                                        src={dcOfflineImg}
                                        alt=""
                                    />
                                )}
                            </>
                        }
                        <div className="px-0 md:px-4">
                            <h2 className="text-white text-lg font-mono md:text-xl xl:text-2xl">
                                @{data?.discord_user.username}
                            </h2>
                            {data?.discord_status === "offline" ? (<>
                                <p className=" text-gray-300 pt-0.5 text-md font-mono md:pt-2 md:text-xl">
                                    offline
                                </p>
                                <p className=" text-gray-300 text-sm font-mono md:text-xl">{currTime && currDate && currDate + ", " + currTime}</p>
                            </>
                            ) : (
                                data?.activities?.map((val, i) => (
                                    <>
                                        {/* {console.log(val)}  */}
                                        {/* {i === 0 && <div className='flex'> <p key={(val as { state: string }).state} className=' text-gray-200 pt-1 text-xs font-serif md:text-lg xl:text-2xl'>{(val as { state: string }).state} </p>
                                            <img className=' w-6 pt-2 to-white' src={statusImg} alt="" /> </div>} */}
                                        {i === 1 && (
                                            <p
                                                key={(val as { name: string }).name}
                                                className=" text-gray-200 pt-1 text-xs font-serif md:text-lg xl:text-2xl"
                                            >
                                                Playing {(val as { name: string }).name}
                                            </p>
                                        )}
                                        {i === 1 && (
                                            <p
                                                key={(val as { details: string }).details}
                                                className=" text-gray-300 text-xs font-serif md:text-lg xl:text-2xl"
                                            >
                                                {(val as { details: string }).details}
                                            </p>
                                        )}
                                        {i === 1 && (
                                            <p
                                                key={(val as { state: string }).state}
                                                className=" text-gray-300 text-xs font-serif md:text-lg xl:text-lg"
                                            >
                                                {(val as { state: string }).state}
                                            </p>
                                        )}
                                    </>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div className="">
                <img
                    className="w-64 rounded-xl hover:translate-x-2 hover:translate-y-2 delay-100 transition-all duration-500 md:w-72 xl:w-80 "
                    src={batImg}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Profile;
// style={"transform: perspective(500px) rotateX(0deg) rotateY(0deg); transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s, transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"}
