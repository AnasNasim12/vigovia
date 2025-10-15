// /Users/anasnasim/Desktop/TechCurators/Vigovia/app/page.tsx
import React from "react";
const style = {
  // purple for the "Day 1" pill via --primary token
  ["--primary" as keyof React.CSSProperties]: "#3A2568",
  // blue for the timeline line via --accent token
  ["--accent" as keyof React.CSSProperties]: "#2F80ED",
  // dark purple for the timeline circles
  ["--circle-color" as keyof React.CSSProperties]: "#321E5D",
} as React.CSSProperties;

export default function Page() {
  return (
    <div className="min-h-screen bg-white px-4 md:px-[100px]">
      {/* top-centered logo */}
      <div className="pt-8 flex justify-center">
        <img
          src="/Frame%20206.png"
          alt="vigovia logo"
          className="w-32 md:w-48"
        />
      </div>
      <div className="w-full mt-4 max-w-screen-2xl mx-auto rounded-3xl bg-gradient-to-r from-[#4BA1EB] to-[#936FE0] text-white flex flex-col items-center justify-center py-8 px-4">
        <h2 className="text-5xl font-normal mb-1">Hi, Rahul!</h2>
        <h1 className="text-5xl font-bold mb-2 text-center">
          Singapore Itinerary
        </h1>
        <p className="text-3xl mb-4">4 Days 3 Nights</p>
        <div className="flex space-x-6 items-center">
          <img
            src="/material-symbols_flight.svg"
            alt="flight"
            className="w-6 h-6 md:w-8 md:h-8"
          />
          <img
            src="/fluent_building-32-filled.svg"
            alt="building"
            className="w-6 h-6 md:w-8 md:h-8"
          />
          <img
            src="/Vector.svg"
            alt="refresh"
            className="w-6 h-6 md:w-8 md:h-8"
          />
          <img
            src="/bxs_taxi.svg"
            alt="car"
            className="w-6 h-6 md:w-8 md:h-8"
          />
          <img
            src="/visa%20purple%201.png"
            alt="camera"
            className="w-8 h-6 md:w-10 md:h-8"
          />
        </div>
      </div>
      <div className="flex justify-between max-w-screen-2xl mx-auto mt-12 items-start border border-[#541C9C] rounded-3xl p-5 text-black">
        <div>
          <p className="font-semibold">Departure From :</p>
          <p>Mumbai</p>
        </div>

        <div>
          <p className="font-semibold">Departure :</p>
          <p>31/10/2025</p>
        </div>

        <div>
          <p className="font-semibold">Arrival :</p>
          <p>01/11/2025</p>
        </div>

        <div>
          <p className="font-semibold">Destination :</p>
          <p>Singapore</p>
        </div>

        <div>
          <p className="font-semibold">No. Of Travellers :</p>
          <p>4</p>
        </div>
      </div>
      <section
        style={style}
        className="max-w-screen-2xl mx-auto px-6 py-6 bg-white text-foreground"
      >
        <div className="flex w-full items-start gap-8">
          {/* Left vertical pill */}
          <div className="hidden md:flex h-[290px] w-[56px] shrink-0 items-center justify-center rounded-[48px] bg-[#321E5D] text-white shadow-sm">
            <span
              className="text-2xl font-semibold tracking-wide"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Day 1
            </span>
          </div>

          {/* Main media + title block */}
          <div className="flex min-w-[320px] max-w-[420px] h-[250px] flex-col items-center text-center">
            <img
              src="/Ellipse 1847.png"
              alt="Promenade lined with palm trees at sunset"
              className="w-[180px] h-[180px] rounded-full object-cover shadow"
            />
            <h2
              id="day-1-title"
              className="mt-8 text-black text-balance text-2xl font-semibold tracking-tight"
            >
              27th November
            </h2>
            <p className="text-md text-black">
              Arrival In Singapore & City
              <br />
              Exploration
            </p>
          </div>

          {/* Timeline + content */}
          <div className="flex w-full items-stretch gap-8">
            {/* Vertical timeline rail */}
            <div className="relative w-6 shrink-0 h-[300px]">
              {/* rail */}
              <div className="absolute left-1/2 top-[12px] bottom-[62px] w-[3px] -translate-x-1/2 rounded-full bg-[var(--accent)]" />
              {/* node: morning */}
              <span className="absolute left-1/2 top-[12px] z-[1] block size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[var(--circle-color)] bg-white" />
              {/* node: afternoon */}
              <span className="absolute left-1/2 top-[65px] z-[1] block size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[var(--circle-color)] bg-white" />
              {/* node: evening */}
              <span className="absolute left-1/2 bottom-[50px] z-[1] block size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[var(--circle-color)] bg-white" />
            </div>

            {/* Headings + bullets */}
            <div className="relative flex-1 h-[300px]">
              {/* Morning */}
              <div className="absolute top-0 left-0 right-0 grid grid-cols-[160px_1fr] gap-4">
                <div className="text-xl text-black font-semibold whitespace-nowrap">
                  Morning
                </div>
                <ul className="text-black font-light list-disc pl-6 text-lg leading-9">
                  <li>Arrive In Singapore. Transfer From Airport To Hotel.</li>
                </ul>
              </div>

              {/* Afternoon */}
              <div className="absolute top-[120px] left-0 right-0 -translate-y-1/2 grid grid-cols-[160px_1fr] gap-4">
                <div className="text-xl text-black font-semibold whitespace-nowrap">
                  Afternoon
                </div>
                <ul className="text-black font-light list-disc pl-6 text-lg leading-9">
                  <li>Check Into Your Hotel.</li>
                  <li>Visit Marina Bay Sands Sky Park (2-3 Hours).</li>
                  <li>
                    Optional: Stroll Along Marina Bay Waterfront Promenade Or
                    Helix Bridge.
                  </li>
                </ul>
              </div>

              {/* Evening */}
              <div className="absolute bottom-[20px] left-0 right-0 grid grid-cols-[160px_1fr] gap-4">
                <div className="text-xl text-black font-semibold whitespace-nowrap">
                  Evening
                </div>
                <ul className="text-black font-light list-disc pl-6 text-lg leading-9">
                  <li>
                    Explore Gardens By The Bay, Including Super Tree Grove (3-4
                    Hours)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grey margin line */}
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full h-px bg-gray-300"></div>
      </div>

      <section
        style={style}
        className="max-w-screen-2xl mx-auto px-6 py-6 bg-white text-foreground"
      >
        <div className="flex w-full items-start gap-8">
          {/* Left vertical pill */}
          <div className="hidden md:flex h-[290px] w-[56px] shrink-0 items-center justify-center rounded-[48px] bg-[#321E5D] text-white shadow-sm">
            <span
              className="text-2xl font-semibold tracking-wide"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Day 2
            </span>
          </div>

          {/* Main media + title block */}
          <div className="flex min-w-[320px] max-w-[420px] h-[250px] flex-col items-center text-center">
            <img
              src="/Ellipse 1848.png"
              alt="Promenade lined with palm trees at sunset"
              className="w-[180px] h-[180px] rounded-full object-cover shadow"
            />
            <h2
              id="day-1-title"
              className="mt-8 text-black text-balance text-2xl font-semibold tracking-tight"
            >
              27th November
            </h2>
            <p className="text-md text-black">
              Arrival In Singapore & City
              <br />
              Exploration
            </p>
          </div>

          {/* Timeline + content */}
          <div className="flex w-full items-stretch gap-8">
            {/* Vertical timeline rail */}
            <div className="relative w-6 shrink-0 h-[300px]">
              {/* rail */}
              <div className="absolute left-1/2 top-[12px] bottom-[62px] w-[3px] -translate-x-1/2 rounded-full bg-[var(--accent)]" />
              {/* node: morning */}
              <span className="absolute left-1/2 top-[12px] z-[1] block size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[var(--circle-color)] bg-white" />
              {/* node: afternoon */}
              <span className="absolute left-1/2 top-[65px] z-[1] block size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[var(--circle-color)] bg-white" />
              {/* node: evening */}
              <span className="absolute left-1/2 bottom-[50px] z-[1] block size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[var(--circle-color)] bg-white" />
            </div>

            {/* Headings + bullets */}
            <div className="relative flex-1 h-[300px]">
              {/* Morning */}
              <div className="absolute top-0 left-0 right-0 grid grid-cols-[160px_1fr] gap-4">
                <div className="text-xl text-black font-semibold whitespace-nowrap">
                  Morning
                </div>
                <ul className="text-black font-light list-disc pl-6 text-lg leading-9">
                  <li>Arrive In Singapore. Transfer From Airport To Hotel.</li>
                </ul>
              </div>

              {/* Afternoon */}
              <div className="absolute top-[120px] left-0 right-0 -translate-y-1/2 grid grid-cols-[160px_1fr] gap-4">
                <div className="text-xl text-black font-semibold whitespace-nowrap">
                  Afternoon
                </div>
                <ul className="text-black font-light list-disc pl-6 text-lg leading-9">
                  <li>Check Into Your Hotel.</li>
                  <li>Visit Marina Bay Sands Sky Park (2-3 Hours).</li>
                  <li>
                    Optional: Stroll Along Marina Bay Waterfront Promenade Or
                    Helix Bridge.
                  </li>
                </ul>
              </div>

              {/* Evening */}
              <div className="absolute bottom-[20px] left-0 right-0 grid grid-cols-[160px_1fr] gap-4">
                <div className="text-xl text-black font-semibold whitespace-nowrap">
                  Evening
                </div>
                <ul className="text-black font-light list-disc pl-6 text-lg leading-9">
                  <li>
                    Explore Gardens By The Bay, Including Super Tree Grove (3-4
                    Hours)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grey margin line */}
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full h-px bg-gray-300"></div>
      </div>

      <section
        style={style}
        className="max-w-screen-2xl mx-auto px-6 py-6 bg-white text-foreground"
      >
        <div className="flex w-full items-start gap-8">
          {/* Left vertical pill */}
          <div className="hidden md:flex h-[290px] w-[56px] shrink-0 items-center justify-center rounded-[48px] bg-[#321E5D] text-white shadow-sm">
            <span
              className="text-2xl font-semibold tracking-wide"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Day 3
            </span>
          </div>

          {/* Main media + title block */}
          <div className="flex min-w-[320px] max-w-[420px] h-[250px] flex-col items-center text-center">
            <img
              src="/Ellipse 1849.png"
              alt="Promenade lined with palm trees at sunset"
              className="w-[180px] h-[180px] rounded-full object-cover shadow"
            />
            <h2
              id="day-1-title"
              className="mt-8 text-black text-balance text-2xl font-semibold tracking-tight"
            >
              27th November
            </h2>
            <p className="text-md text-black">
              Arrival In Singapore & City
              <br />
              Exploration
            </p>
          </div>

          {/* Timeline + content */}
          <div className="flex w-full items-stretch gap-8">
            {/* Vertical timeline rail */}
            <div className="relative w-6 shrink-0 h-[300px]">
              {/* rail */}
              <div className="absolute left-1/2 top-[12px] bottom-[62px] w-[3px] -translate-x-1/2 rounded-full bg-[var(--accent)]" />
              {/* node: morning */}
              <span className="absolute left-1/2 top-[12px] z-[1] block size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[var(--circle-color)] bg-white" />
              {/* node: afternoon */}
              <span className="absolute left-1/2 top-[65px] z-[1] block size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[var(--circle-color)] bg-white" />
              {/* node: evening */}
              <span className="absolute left-1/2 bottom-[50px] z-[1] block size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[var(--circle-color)] bg-white" />
            </div>

            {/* Headings + bullets */}
            <div className="relative flex-1 h-[300px]">
              {/* Morning */}
              <div className="absolute top-0 left-0 right-0 grid grid-cols-[160px_1fr] gap-4">
                <div className="text-xl text-black font-semibold whitespace-nowrap">
                  Morning
                </div>
                <ul className="text-black font-light list-disc pl-6 text-lg leading-9">
                  <li>Arrive In Singapore. Transfer From Airport To Hotel.</li>
                </ul>
              </div>

              {/* Afternoon */}
              <div className="absolute top-[120px] left-0 right-0 -translate-y-1/2 grid grid-cols-[160px_1fr] gap-4">
                <div className="text-xl text-black font-semibold whitespace-nowrap">
                  Afternoon
                </div>
                <ul className="text-black font-light list-disc pl-6 text-lg leading-9">
                  <li>Check Into Your Hotel.</li>
                  <li>Visit Marina Bay Sands Sky Park (2-3 Hours).</li>
                  <li>
                    Optional: Stroll Along Marina Bay Waterfront Promenade Or
                    Helix Bridge.
                  </li>
                </ul>
              </div>

              {/* Evening */}
              <div className="absolute bottom-[20px] left-0 right-0 grid grid-cols-[160px_1fr] gap-4">
                <div className="text-xl text-black font-semibold whitespace-nowrap">
                  Evening
                </div>
                <ul className="text-black font-light list-disc pl-6 text-lg leading-9">
                  <li>
                    Explore Gardens By The Bay, Including Super Tree Grove (3-4
                    Hours)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Grey margin line */}
       <div className="max-w-screen-2xl mx-auto">
         <div className="w-full h-px bg-gray-300"></div>
       </div>

       {/* Company Information Section */}
       <div className="max-w-screen-2xl mx-auto px-6 py-6 bg-white">
         <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
           {/* Left Section - Company Details */}
           <div className="flex-1">
             <h3 className="text-md font-bold text-black mb-2">Vigovia Tech Pvt. Ltd</h3>
             <p className="text-sm text-black">
               Registered Office: Hd-109 Cinnabar Hills,<br/> Links Business Park, Karnataka, India.
             </p>
           </div>

           {/* Middle Section - Contact Information */}
           <div className="flex-1">
             <div className="space-y-2">
               <p className="text-sm text-black">
                 <span className="font-semibold">Phone:</span> +91-9504061112
               </p>
               <p className="text-sm text-black">
                 <span className="font-semibold">Email ID:</span> Utkarsh@Vigovia.Com
               </p>
               <p className="text-sm text-black">
                 <span className="font-semibold">CIN:</span> U79110KA2024PTC191890
               </p>
             </div>
           </div>

           {/* Right Section - Logo */}
           <div className="flex flex-col items-center">
             <img
               src="/Frame 206.png"
               alt="Vigovia Logo"
               className="w-48 h-auto mb-2"
             />
           </div>
         </div>
       </div>
     </div>
  );
}
