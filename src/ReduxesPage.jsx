import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ReduxesPage() {
  const reduxItems = [
    
    { id: 1, image: "https://i.imgur.com/2QYGXgq.jpeg", link: "https://drive.google.com/file/d/1qTmVtpSOx4LFsJwuYovoLs6sXkN6LMmC/view?usp=sharing", youtube: "https://www.youtube.com/watch?v=wjrud9yv9rc" },
    { id: 2, image: "https://i.imgur.com/80uFUvb.jpeg", link: "https://drive.google.com/file/d/10o_vzO-qCXTXnGnqy7iSWaKYH3rQxzn8/view?usp=drive_link", youtube: "https://www.youtube.com/watch?v=BqTYExJNmMA" },
    { id: 3, image: "https://i.imgur.com/Yx3p2AO.jpeg", link: "https://drive.google.com/file/d/1z6k_CNgeFhuA27Zs_xBMjo6Akf9AdEic/view", youtube: "https://www.youtube.com/watch?v=R7-ailrn1XM" },
    { id: 4, image: "https://i.imgur.com/cuMqOak.jpeg", link: "https://drive.google.com/file/d/1o42v16gsi5NuD45HbzLKX1KTyH2VnrHJ/view?usp=sharing", youtube: "https://www.youtube.com/watch?v=59eRSunVK0c" },
    { id: 5, image: "https://i.imgur.com/nTSpmp2.jpeg", link: "https://drive.google.com/drive/folders/1PfCtQCH_SJQ0eeY73ATyJxEzw9ymRxOg", youtube: "https://www.youtube.com/watch?v=C-8T1A1cH3A" },
    { id: 6, image: "https://i.imgur.com/dw5elAr.jpeg", link: "https://discord.com/channels/877703962172731402/1289138665443823648", youtube: "https://www.youtube.com/watch?v=v2GXkd0wjrY" },
    { id: 7, image: "https://i.imgur.com/umjCBgt.jpeg", link: "https://drive.google.com/file/d/1GMgHquhFE10a-J1bTq62d2B9fU1AiF3L/view?usp=sharing", youtube: "https://youtu.be/xUyzWpSWaHQ?si=RRHCjaYlCW82lYUL" },
    { id: 8, image: "https://i.imgur.com/cFTd28J.jpeg", link: "https://drive.google.com/file/d/1R16D2znjdXBcRb_JMrenqicw5kDCEaKl/view?usp=sharing", youtube: "https://youtu.be/jO-Hxbt2HBo?si=KjinjZ7B7zSI4HQb" },
    { id: 9, image: "https://i.imgur.com/fBtgQeg.jpeg", link: "https://drive.google.com/file/d/1lf-NC6fy4647bQimKcpnLJ6JAYkwxkTF/view?usp=sharing", youtube: "https://youtu.be/tpwmsbeTSxw?si=l4NkyyQleGBOOMCZ" },
    { id: 10, image: "https://i.imgur.com/KixD9aU.jpeg", link: "https://drive.google.com/file/d/1XVMSQkXIlzAC7E3WuV_SoAQNMTC9grro/view?usp=sharing", youtube: "https://www.youtube.com/watch?v=WK1ClfcN9Lg" },
    { id: 11, image: "https://i.imgur.com/2RJdU62.png", link: "https://drive.google.com/file/d/1ZBpqYGW0FiuKoNsPptc4FrC-kylD6JM7", youtube: "https://youtu.be/8ZMj868c-QI?si=bPfSYaa68k_lNRwk" },
  ];

  const gunpackItems = [
    { id: 1, image: "https://i.imgur.com/EIQxwWQ.png", link: "https://drive.google.com/file/d/1aywapcwYbpCZP7gKMS0MwlGKAg7RIWZY/view?usp=sharing ", youtube: "https://t.me/panikamedia/223" },
    { id: 2, image: "https://i.imgur.com/17j18GA.png", link: "https://drive.google.com/file/d/1PKjoYCiqNu4EnDLfHIz_sPnVKn6W7ova/view?usp=sharing", youtube: "https://t.me/panikamedia/225" },
    { id: 3, image: "https://i.imgur.com/k8dilYQ.png", link: "https://drive.google.com/file/d/1pf9alqTKyPBQYbrULhfH3pJbdztEwPT5/view?usp=sharing", youtube: "https://t.me/panikamedia/227" },
    { id: 4, image: "https://i.imgur.com/RBCsy0u.png", link: "https://drive.google.com/file/d/1POivh5cny5xtdJ6iUDM41V2HHh_-W8TB/view?usp=sharing", youtube: "https://t.me/panikamedia/229" },
    { id: 5, image: "https://i.imgur.com/dLCWLZ4.png", link: "https://drive.google.com/file/d/19Z5LWQ1PEB2LC0b_y3WqpU0gc2IpkzSG/view?usp=sharing", youtube: "https://t.me/panikamedia/232" },
    { id: 6, image: "https://i.imgur.com/bjwaKZg.png", link: "https://drive.google.com/file/d/1rLXOn0Q4ItyPreNm29EGrp3mwdTz45yV/view?usp=sharing ", youtube: "https://t.me/panikamedia/233" },
    { id: 7, image: "https://i.imgur.com/aS0AQ2S.jpeg", link: "https://drive.google.com/file/d/11UqWJdBXnOuXVcRqogemjNqXp727zxPz/view?usp=drive_link", youtube: "https://www.youtube.com/watch?v=-hGa-gEBqIk" },
    { id: 8, image: "https://i.imgur.com/egFtAZE.png", link: "https://drive.google.com/file/d/1Tbzcf10HdCQciITiGqwXKTKoj8N_Bl52/view?usp=sharing", youtube: "https://t.me/panikamedia/238" },
    { id: 9, image: "https://i.imgur.com/VGpIjUi.png", link: "https://drive.google.com/file/d/1M7te93fypb-sVn5N8ZUSyVa3-aqwMAuE/view?usp=sharing", youtube: "https://t.me/panikamedia/240" },
    { id: 10, image: "https://i.imgur.com/7wRgkPt.png", link: "https://drive.google.com/file/d/1A-AC-Q3JnTznPpmAAzBDDURT9g5UF_o5/view?usp=sharing", youtube: "https://t.me/panikamedia/256" },
  ];

  const chunkSize = 6;
  const reduxChunks = [];
  const gunpackChunks = [];

  for (let i = 0; i < reduxItems.length; i += chunkSize) {
    reduxChunks.push(reduxItems.slice(i, i + chunkSize));
  }

  for (let i = 0; i < gunpackItems.length; i += chunkSize) {
    gunpackChunks.push(gunpackItems.slice(i, i + chunkSize));
  }

  const renderArrow = (onClickHandler, direction) => (
    <button
      onClick={onClickHandler}
      className={`absolute ${direction === 'prev' ? '-left-0' : '-right-0'} top-1/2 transform -translate-y-1/2 
        flex items-center justify-center text-black bg-white hover:text-white hover:bg-black rounded-full w-12 h-12 
        transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl 
        focus:outline-none hover:scale-90`}
      style={{ zIndex: 1000 }}>
      {direction === 'prev' ? (
        <span className="text-3xl font-extrabold leading-none" style={{ fontFamily: 'Arial Black, sans-serif' }}>
          ❮
        </span>
      ) : (
        <span className="text-3xl font-extrabold leading-none" style={{ fontFamily: 'Arial Black, sans-serif' }}>
          ❯
        </span>
      )}
    </button>
  );
  
  const handleTouchStart = (e) => {
    e.preventDefault();  // отключение дефолтного поведения при свайпе
  };
  
  return (
    <div className="flex flex-col items-center min-h-screen text-white p-8 ">
      {/* Redux Section */}
      <div className="relative max-w-7xl w-full mb-16 ">
        <h2 className="text-2xl font-bold mb-4">Redux</h2>
        <Carousel infiniteLoop showThumbs={false} autoPlay showStatus={false} dynamicHeight={false} className="rounded-xl" emulateTouch swipeable renderArrowPrev={(onClickHandler) => renderArrow(onClickHandler, 'prev')}
          renderArrowNext={(onClickHandler) => renderArrow(onClickHandler, 'next')}>
          {reduxChunks.map((chunk, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 ">
              {chunk.map((item) => (
                <div key={item.id} className="relative hover:grayscale border border-white hover:border-gray-900 hover:scale-95 rounded-3xl transition duration-500 ">
                  <img src={item.image} alt={`Redux ${item.id}`} className="w-full h-full rounded-3xl object-cover " />
                  <div className="absolute inset-0 bg-black rounded-3xl bg-opacity-70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg py-2 px-4 font-bold text-white rounded-3xl bg-gray-600 hover:bg-gray-500 transition duration-300 transform hover:scale-110 mb-2">Download</a>
                    <a href={item.youtube} target="_blank" rel="noopener noreferrer" className="text-lg py-1 px-4 font-semibold bg-white bg-opacity-50 rounded-3xl hover:bg-gray-500 transition duration-300 hover:bg-opacity-80 text-black hover:text-white transform hover:scale-95">Review</a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>

      {/* GunPack Section */}
      <div className="relative max-w-7xl w-full mb-16 ">
        <h2 className="text-2xl font-bold mb-4">GunPack</h2>
        <Carousel infiniteLoop showThumbs={false} showStatus={false} autoPlay dynamicHeight={false} className="rounded-xl" emulateTouch swipeable renderArrowPrev={(onClickHandler) => renderArrow(onClickHandler, 'prev')}
          renderArrowNext={(onClickHandler) => renderArrow(onClickHandler, 'next')}>
          {gunpackChunks.map((chunk, index) => (
            <div key={index} className="grid grid-cols-3 gap-4">
              {chunk.map((item) => (
                <div key={item.id} className="relative hover:grayscale border border-white hover:border-gray-900 hover:scale-95 rounded-3xl transition duration-500 ">
                  <img src={item.image} alt={`GunPack ${item.id}`} className="w-full h-full rounded-3xl object-cover" />
                  <div className="absolute inset-0 bg-black rounded-3xl bg-opacity-70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg py-2 px-4 font-bold text-white rounded-3xl bg-gray-600 hover:bg-gray-500 transition duration-300 transform hover:scale-110 mb-2">Download</a>
                    <a href={item.youtube} target="_blank" rel="noopener noreferrer" className="text-sm py-1 px-4 font-semibold bg-white bg-opacity-50 rounded-3xl hover:bg-gray-500 transition duration-300 hover:bg-opacity-80 text-black hover:text-white transform hover:scale-105">Review</a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>

      {/* Go Back Button */}
      <a href="/" className="bg-white text-black opacity-90 mt-10 py-2 px-6 rounded-full hover:bg-opacity-100 transition duration-300 hover:scale-105">Go Back</a>
    </div>
  );
}

export default ReduxesPage;
