const origin = 'http://localhost:8080/';

export default {
  reset: ({ uuid }) => ({
    subject: 'Reset password link - UEvent.com',
    html: `
            <div>
                <p>
                    You requested for reset password, kindly use this to reset your password
                    <a href="${origin}reset-password/${uuid}">link</a>
                </p>
            </div>
 `,
  }),
  activate: ({ uuid }) => ({
    subject: 'Activate email Link - UEvent.com',
    html: `
        <div>
            <p>
                Thank you for registering, for confirmation  email follow the
                <a href="${origin}api/auth/confirm-email/${uuid}">link</a>
            </p>
        </div>
   `,
  }),
  ticket: (
    {
      // )))))
    }
  ) => ({
    subject: 'Thanks for buying the ticket',
    html: `
    <html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
  </head>
  <body
    style="
      margin-left: auto;
      margin-right: auto;
      margin-top: auto;
      margin-bottom: auto;
      background-color: rgb(255, 255, 255);
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
    "
  >
    <section style="background-color: rgb(239, 246, 255); padding-top: 4rem">
      <div
        style="
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
        "
      >
        <div
          style="
            position: relative;
            margin-bottom: 1.5rem;
            margin-top: 4rem;
            display: flex;
            width: 100%;
            min-width: 0px;
            flex-direction: column;
            overflow-wrap: break-word;
            border-radius: 0.5rem;
            background-color: rgb(255, 255, 255);
            box-shadow: 0 0 #0000, 0 0 #0000, 0 20px 25px -5px rgb(0, 0, 0, 0.1),
              0 8px 10px -6px rgb(0, 0, 0, 0.1);
          "
        >
          <div style="padding-left: 1.5rem; padding-right: 1.5rem">
            <div
              style="display: flex; flex-wrap: wrap; justify-content: center"
            >
              <div style="flex-wrap: wrap">
                <div class="">
                  <img
                    src="https://i.imgur.com/FQS7fFC.png"
                    alt="step"
                    style="
                      margin-left: auto;
                      margin-right: auto;
                      margin-top: 3rem;
                      height: 20rem;
                      width: 20rem;
                      border-radius: 0.5rem;
                      border-width: 1px;
                      padding: 0.5rem;
                    "
                  />
                  <div>
                    <p
                      style="
                        margin-top: 0.5rem;
                        text-align: center;
                        font-weight: 600;
                      "
                    >
                      #KON4AVPIZDE
                    </p>
                    <p
                      style="
                        margin-top: 0.25rem;
                        text-align: center;
                        font-weight: 500;
                      "
                    >
                      040-12-00-01166166-001
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style="margin-top: 3rem; text-align: center">
              <p
                style="
                  margin-bottom: 0.5rem;
                  font-size: 1.25rem;
                  line-height: 1.5;
                  font-weight: 600;
                  color: rgb(29, 78, 216);
                "
              >
                Jenna Stones
              </p>
              <div
                style="
                  margin-bottom: 0.5rem;
                  margin-top: 0px;
                  font-size: 0.875rem;
                  line-height: 1.5;
                  font-weight: 700;
                  text-transform: uppercase;
                  color: rgb(96, 165, 250);
                "
              >
                <i
                  style="
                    margin-right: 0.5rem;
                    font-size: 1.125rem;
                    line-height: 1.75rem;
                    color: rgb(96, 165, 250);
                  "
                ></i
                >Los Angeles, California
              </div>
              <div style="margin-bottom: 0.5rem; color: rgb(37, 99, 235)">
                <i
                  style="
                    margin-right: 0.5rem;
                    font-size: 1.125rem;
                    line-height: 1.75rem;
                    color: rgb(96, 165, 250);
                  "
                ></i
                >Solution Manager - Creative Tim Officer
              </div>
              <div style="margin-bottom: 0.5rem; color: rgb(37, 99, 235)">
                <i
                  style="
                    margin-right: 0.5rem;
                    font-size: 1.125rem;
                    line-height: 1.75rem;
                    color: rgb(96, 165, 250);
                  "
                ></i
                >University of Computer Science
              </div>
            </div>
            <div
              style="
                margin-top: 2rem;
                border-top-width: 1px;
                border-color: rgb(191, 219, 254);
                padding-top: 2rem;
                padding-bottom: 2rem;
                text-align: center;
              "
            >
              <div
                style="display: flex; flex-wrap: wrap; justify-content: center"
              >
                <p
                  style="
                    text-align: center;
                    font-size: 1.25rem;
                    line-height: 1.75rem;
                    font-weight: 700;
                  "
                >
                  Time
                </p>
                <div
                  style="
                    border-bottom-right-radius: 0.25rem;
                    border-bottom-left-radius: 0.25rem;
                    background-color: rgb(249, 250, 251);
                    padding-left: 1.25rem;
                    padding-right: 1.25rem;
                    padding-top: 1.25rem;
                    padding-bottom: 1.25rem;
                  "
                >
                  <div style="padding-left: 1rem; padding-right: 1rem">
                    <div
                      style="
                        border-bottom-width: 1px;
                        border-style: dashed;
                        border-color: rgb(156, 163, 175);
                        padding-bottom: 1rem;
                      "
                    >
                      <p
                        style="
                          font-size: 0.75rem;
                          line-height: 0.75rem;
                          font-weight: 300;
                        "
                      >
                        9:00 AM
                      </p>
                      <a
                        tabindex="0"
                        style="
                          margin-top: 0.5rem;
                          font-size: 1.125rem;
                          line-height: 1.25rem;
                          font-weight: 500;
                          color: rgb(31, 41, 55);
                        "
                        >Zoom call with design team</a
                      >
                      <p
                        style="
                          padding-top: 0.5rem;
                          font-size: 0.875rem;
                          line-height: 1;
                          color: rgb(75, 85, 99);
                        "
                      >
                        Discussion on UX sprint and Wireframe review
                      </p>
                    </div>
                    <div
                      style="
                        border-bottom-width: 1px;
                        border-style: dashed;
                        border-color: rgb(156, 163, 175);
                        padding-bottom: 1rem;
                        padding-top: 1.25rem;
                      "
                    >
                      <p
                        style="
                          font-size: 0.75rem;
                          line-height: 0.75rem;
                          font-weight: 300;
                          color: rgb(107, 114, 128);
                        "
                      >
                        10:00 AM
                      </p>
                      <a
                        tabindex="0"
                        style="
                          margin-top: 0.5rem;
                          font-size: 1.125rem;
                          line-height: 1.25rem;
                          font-weight: 500;
                          color: rgb(31, 41, 55);
                        "
                        >Orientation session with new hires</a
                      >
                    </div>
                    <div
                      style="
                        border-bottom-width: 1px;
                        border-style: dashed;
                        border-color: rgb(156, 163, 175);
                        padding-bottom: 1rem;
                        padding-top: 1.25rem;
                      "
                    >
                      <p
                        style="
                          font-size: 0.75rem;
                          line-height: 0.75rem;
                          font-weight: 300;
                          color: rgb(107, 114, 128);
                        "
                      >
                        9:00 AM
                      </p>
                      <a
                        tabindex="0"
                        style="
                          margin-top: 0.5rem;
                          font-size: 1.125rem;
                          line-height: 1.25rem;
                          font-weight: 500;
                          color: rgb(31, 41, 55);
                        "
                        >Zoom call with design team</a
                      >
                      <p
                        style="
                          padding-top: 0.5rem;
                          font-size: 0.875rem;
                          line-height: 1;
                          color: rgb(75, 85, 99);
                        "
                      >
                        Discussion on UX sprint and Wireframe review
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>

    `,
  }),
  code: ({ uuid }) => ({
    subject: 'Activate email code - usof-backend.com',
    html: `
       <div>
            <p>
            You have submitted an email change request to this email address, please enter a 6-digit code to confirm
            </p>
            <p align="center" style="
            font-size: 40px;
        "><b>${uuid
          .split('')
          .map((item, i) => {
            if (i === 3) {
              return ` ${item}`;
            }
            return item;
          })
          .join('')}</b></p>
        </div>
        `,
  }),
};

// `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
//             <html>
//             <head>
//                 <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
//                 <link href="/dist/output.css" rel="stylesheet">
//                 <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
//                 <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
            
//                 <title>Пример веб-страницы</title>
            
//             </head>
//             <body>
//                 <script src="https://cdn.tailwindcss.com"></script>
//                 <section class="pt-16 bg-blueGray-50">
//                 <div class="w-full lg:w-4/12 px-4 mx-auto">
//                     <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
//                     <div class="px-6">
//                         <div class="flex flex-wrap justify-center">
            
//                         <div class="flex-wrap md:flex">
//                             <div class="">
//                             <img class="mx-auto mt-12 h-80 w-80 rounded-lg border p-2 md:mt-0" src="https://i.imgur.com/FQS7fFC.png" alt="step" />
//                             <div>
//                                 <p class="mt-2 text-center font-semibold text-gray-600">#KON4AVPIZDE</p>
//                                 <p class="mt-1 text-center font-medium text-red-500">040-12-00-01166166-001</p>
//                             </div>
//                             </div>
//                         </div>
//                         </div>
                        
//                         <div class="text-center mt-12">
//                         <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
//                             Jenna Stones
//                         </h3>
//                         <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
//                             <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
//                             Los Angeles, California
//                         </div>
//                         <div class="mb-2 text-blueGray-600 ">
//                             <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
//                             Solution Manager - Creative Tim Officer
//                         </div>
//                         <div class="mb-2 text-blueGray-600">
//                             <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
//                             University of Computer Science
//                         </div>
//                         </div>
//                         <div class="mt-8 py-8 border-t border-blueGray-200 text-center">
//                         <div class="flex flex-wrap justify-center">
//                             <h1 class=" text-center text-xl font-bold">Time</h1>
//                             <div class="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
//                                 <div class="px-4">
//                                     <div class="border-b pb-4 border-gray-400 border-dashed">
//                                         <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
//                                         <a tabindex="0" class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">Zoom call with design team</a>
//                                         <p class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">Discussion on UX sprint and Wireframe review</p>
//                                     </div>
//                                     <div class="border-b pb-4 border-gray-400 border-dashed pt-5">
//                                         <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">10:00 AM</p>
//                                         <a tabindex="0" class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">Orientation session with new hires</a>
//                                     </div>
//                                     <div class="border-b pb-4 border-gray-400 border-dashed pt-5">
//                                         <p class="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
//                                         <a tabindex="0" class="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">Zoom call with design team</a>
//                                         <p class="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">Discussion on UX sprint and Wireframe review</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                 </div>

//                 </section>
//             </body>
//             </html>`,