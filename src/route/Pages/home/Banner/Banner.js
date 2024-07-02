import React from 'react';

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col w-full lg:w-1/2 p-2">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4dff3583c70c87537a968695623d3e51dac5b3a03d128c7de3cdb88d9c77e5b0?apiKey=c261b1132bd3471985b2b833c77deb73&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4dff3583c70c87537a968695623d3e51dac5b3a03d128c7de3cdb88d9c77e5b0?apiKey=c261b1132bd3471985b2b833c77deb73&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4dff3583c70c87537a968695623d3e51dac5b3a03d128c7de3cdb88d9c77e5b0?apiKey=c261b1132bd3471985b2b833c77deb73&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4dff3583c70c87537a968695623d3e51dac5b3a03d128c7de3cdb88d9c77e5b0?apiKey=c261b1132bd3471985b2b833c77deb73&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4dff3583c70c87537a968695623d3e51dac5b3a03d128c7de3cdb88d9c77e5b0?apiKey=c261b1132bd3471985b2b833c77deb73&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4dff3583c70c87537a968695623d3e51dac5b3a03d128c7de3cdb88d9c77e5b0?apiKey=c261b1132bd3471985b2b833c77deb73&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4dff3583c70c87537a968695623d3e51dac5b3a03d128c7de3cdb88d9c77e5b0?apiKey=c261b1132bd3471985b2b833c77deb73&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4dff3583c70c87537a968695623d3e51dac5b3a03d128c7de3cdb88d9c77e5b0?apiKey=c261b1132bd3471985b2b833c77deb73&"
          className="aspect-w-4 aspect-h-3 object-cover object-center"
          alt=""
        />
      </div>
      <div className="flex flex-col w-full lg:w-auto p-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white">
        <div className="flex flex-col justify-center items-start p-8 space-y-4">
          <div className="text-2xl font-bold uppercase">
            SALE UP TO 35% OFF
          </div>
          <div className="text-black text-3xl font-bold">
            HUNDREDS of <br />
            New lower prices!
          </div>
          <div className="text-black text-lg">
            It’s more affordable than ever to give every athlete a productive makeover
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-lg font-semibold">
              Shop Now
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/865084c6c9d385da4cbe8435ed92de150f8b61feea79087daeebe92dc89e2637?apiKey=c261b1132bd3471985b2b833c77deb73&"
              className="w-5 h-5"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
